import React from 'react'
import { useQuery } from 'react-query';
import FullscreenSpinner from '../../components/FullscreenSpinner';
import { useAxios } from '../../context/AxiosContext';
import { useAuth } from '../../hooks/Auth.hooks';

const LeaderboardComponent: React.FC = () => {

    const { authAxios } = useAxios();
    const { userData } = useAuth();
    const { data, isFetching } = useQuery(
        ["leaderboard", userData?.user.userId],
        () => authAxios.get<UserScore[]>("GameHistory/Leaderboard")
    );

    const leaderboard = data?.data.map((item, key) => {
        return (
            <li key={key}>
                {"Name: " + item.fullName + ", Score:" + item.score + ", Time Completed:" + item.timeCompleted.minutes + ":" + item.timeCompleted.seconds}
            </li>
        )
    })

    return (
        <>
            {isFetching ? <FullscreenSpinner /> :
                <ol>
                    {leaderboard}
                </ol>
            }
        </>
    )
}

export default LeaderboardComponent;

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
