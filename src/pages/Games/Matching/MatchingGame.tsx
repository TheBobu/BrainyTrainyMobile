import React, { useEffect, useRef, useState } from 'react'
import Card, { CardType } from './Card';
import whiteflower from './images/whiteflower.png'
import purple from './images/purple.png'
import pinkrose from './images/pinkrose.png'
import pink from './images/pink.png'
import magenta from './images/magenta.png'
import bluerose from './images/bluerose.png'
import sunflower from './images/sunflower.png'
import yellowtulip from './images/yellowtulip.png'
import { IonButton, useIonToast } from '@ionic/react';
import { useMutation } from 'react-query';
import { useAuth } from '../../../hooks/Auth.hooks';
import { useAxios } from '../../../context/AxiosContext';
import { AxiosError } from 'axios';

const shuffleCards = (array: CardType[]) => {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

const MatchingGame: React.FC = () => {
    const [present, dismiss] = useIonToast();
    const uniqueCards: CardType[] = [
        {
            type: "whiteflower",
            image: whiteflower
        },
        {
            type: "purple",
            image: purple
        },
        {
            type: "pinkrose",
            image: pinkrose
        },
        {
            type: "pink",
            image: pink
        },
        {
            type: "magenta",
            image: magenta
        },
        {
            type: "bluerose",
            image: bluerose
        },
        {
            type: "sunflower",
            image: sunflower
        },
        {
            type: "yellowtulip",
            image: yellowtulip
        }
    ]

    const [time,setTime]=useState<Date>(new Date(Date.now()));
    const [openCards, setOpenCards] = useState<number[]>([]);
    const [clearedCards, setClearedCards] = useState<any>({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [score, setScore] = useState(0);

    const date = Date.now();
    const [cards, setCards] = useState<CardType[]>(() =>
        shuffleCards(uniqueCards.concat(uniqueCards))
    );
    let timeout = useRef<NodeJS.Timeout | null>();

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };


    const evaluate = () => {
        const [first, second] = openCards;
        enable();
        if (cards[first].type === cards[second].type) {
            if (cards) {
                if (first){
                    setClearedCards((prev: any) => ({ ...prev, [cards[first].type]: true }));
                    setScore(score+40);
                }
                setOpenCards([]);
                return;
            }
        }
        // This is to flip the cards back after 500ms duration
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);
    };
    const handleCardClick = (index: number) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            setMoves(moves + 1);
            disable();
        } else {
            if (!timeout)
                clearTimeout(timeout);
            setOpenCards([index]);
        }
    };

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;
        if (openCards.length === 2) {
            timeout = setTimeout(evaluate, 300);
        }
        return () => {
            if (!!timeout)
                clearTimeout(timeout);
        };
    }, [openCards]);

    useEffect(() => {
        checkCompletion();
    }, [clearedCards]);
    const checkIsFlipped = (index: number) => {
        return openCards.includes(index);
    };
    const {userData} = useAuth()
    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === uniqueCards.length) {
            setScore(score+40);
            const newdate = new Date(Date.now() - time.valueOf())

            if(!!userData && !!userData.user.userId){
            const gameRecord: GameHistory = {
                addedDate: new Date(new Date(Date.now()).toISOString()),
                gameId: 5,
                game:{
                    id:5,
                    name:"Matching"
                },
                score: score - 2 * moves - newdate.getMinutes()*60 - newdate.getSeconds(),
                minutes:newdate.getMinutes(),
                seconds:newdate.getSeconds(),
                userId: parseInt(userData.user.userId),
            }
            recordGame(gameRecord);
            }
            present({
                buttons: [{ text: 'hide', handler: () => { dismiss(); } }],
                message: `Congratulations! You completed the game in ${moves} moves`,
                duration: 10000,
            });
        }
    };
    const {authAxios} = useAxios()
    const {mutate: recordGame} = useMutation((formData:GameHistory)=>
        authAxios.post("GameHistory",formData),{
            onSuccess:()=>{console.log("success")},
            onError:()=>{
                present({
                    buttons: [{ text: 'hide', handler: () => { dismiss(); } }],
                    message: `Something went wrong`,
                    duration: 5000,
                });
            }
        }
    )

    const checkIsInactive = (card: CardType) => {
        return Boolean(clearedCards[card.type]);
    };

    const handleRestart = () => {
        setTime(new Date(Date.now()));
        setClearedCards([]);
        setOpenCards([]);
        setMoves(0);
        setScore(0);
        setShouldDisableAllCards(false);
        // set a shuffled deck of cards
        setCards(shuffleCards(uniqueCards.concat(uniqueCards)));
    };

    return (
        <>
            <div className="matching-container">
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            index={index}
                            isDisabled={shouldDisableAllCards}
                            isInactive={checkIsInactive(card)}
                            isFlipped={checkIsFlipped(index)}
                            onClick={handleCardClick}
                        />
                    );
                })}

            </div>
            <div className="button-wrap">
                <IonButton className='button-style' onClick={handleRestart} color="primary">
                    Restart
                </IonButton>
            </div>
        </>
    )
}

export default MatchingGame

interface TimeSpan{
    minutes: number,
    seconds: number
}

interface GameHistory{
    addedDate: Date,
    gameId: number,
    game: {
      id: number,
      name: string
    },
    score: number,
    minutes: number,
    seconds: number,
    userId: number | undefined
  }