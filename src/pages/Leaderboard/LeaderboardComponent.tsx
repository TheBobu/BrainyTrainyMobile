import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react'
import { useQuery } from 'react-query';
import FullscreenSpinner from '../../components/FullscreenSpinner';
import { useAxios } from '../../context/AxiosContext';
import { useAuth } from '../../hooks/Auth.hooks';
import './leaderboard.css'
const LeaderboardComponent: React.FC = () => {

    const { authAxios } = useAxios();
    const { userData } = useAuth();
    const { data, isFetching } = useQuery(
        ["leaderboard", userData?.user.userId],
        () => authAxios.get<Leaderboard[]>("GameHistory/Leaderboard")
    );

    const leaderboard = data?.data.map((item, key) => {
        const userScores = item.userScores.map((score, key) => {
            return <li key={key}>{score.fullName + " " + score.score + " " + score.timeCompleted.minutes + ":" + score.timeCompleted.seconds}</li>
        })
        return (
            <IonSlide key={key}>
                <h2>{item.game}</h2>
                <div>
                    <ul>
                        {userScores}
                    </ul>
                </div>
            </IonSlide>
        )
    })

    return (
        <>
            {isFetching ? <FullscreenSpinner /> :
                <IonSlides pager={true} className="leaderboard-slides">
                    {leaderboard}
                </IonSlides>
            }
        </>
    )
}

export default LeaderboardComponent;

interface Leaderboard {
    game: string,
    userScores: UserScore[]
}

interface UserScore {
    fullName: string,
    score: number,
    timeCompleted: {
        ticks: number,
        days: number,
        hours: number,
        milliseconds: number,
        minutes: number,
        seconds: number,
        totalDays: number,
        totalHours: number,
        totalMilliseconds: number,
        totalMinutes: number,
        totalSeconds: number
    }
}
