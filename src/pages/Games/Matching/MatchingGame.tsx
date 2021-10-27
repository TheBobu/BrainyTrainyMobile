import React, { useEffect, useRef, useState } from 'react'
import Card, { CardType } from './Card';
import cover from "./images/cover.png";
import whiteflower from './images/whiteflower.png'
import purple from './images/purple.png'
import pinkrose from './images/pinkrose.png'
import pink from './images/pink.png'
import magenta from './images/magenta.png'
import bluerose from './images/bluerose.png'
import { IonButton, useIonToast } from '@ionic/react';
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
        }
    ]

    const [openCards, setOpenCards] = useState<number[]>([]);
    const [clearedCards, setClearedCards] = useState<any>({});
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
                if (first)
                    setClearedCards((prev: any) => ({ ...prev, [cards[first].type]: true }));
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
    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === uniqueCards.length) {
            present({
                buttons: [{ text: 'hide', handler: () => { dismiss(); } }],
                message: `Congratulations! You completed the game in ${moves} moves`,
                duration: 10000,
            });
        }
    };

    const checkIsInactive = (card: CardType) => {
        return Boolean(clearedCards[card.type]);
    };

    const handleRestart = () => {
        setClearedCards([]);
        setOpenCards([]);
        setShowModal(false);
        setMoves(0);
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