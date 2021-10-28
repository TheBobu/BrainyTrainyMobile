import { IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import { useQuery } from "react-query";
import FullscreenSpinner from "../../components/FullscreenSpinner";
import { useAxios } from "../../context/AxiosContext";
import { useAuth } from "../../hooks/Auth.hooks";
import "./leaderboard.css";
import "./../Profile/profile.css"
import LeaderboardTable, { UserScore } from "./LeaderboardTable";

const LeaderboardComponent: React.FC = () => {
    const { authAxios } = useAxios();
    const { userData } = useAuth();
    const { data, isFetching } = useQuery(
        ["leaderboard", userData?.user.userId],
        () => authAxios.get<Leaderboard[]>("GameHistory/Leaderboard")
    );

    const leaderboard = data?.data.map((item, key) => {
        return (
            <IonSlide key={key} className="slides leaderboard-slide">
                <h1 className="mb-4">{item.game}</h1>
                <div className="card user-card leaderboard-card">
                    <div className="leaderboard-card-block card-block">
                        <LeaderboardTable userScore={item.userScores} />
                    </div>
                </div>
            </IonSlide>
        );
    });

    return (
        <>
            {isFetching ? (
                <FullscreenSpinner />
            ) : (
                <IonSlides pager={true} className="leaderboard-slides">
                    {leaderboard}
                </IonSlides>
            )}
        </>
    );
};

export default LeaderboardComponent;

interface Leaderboard {
    game: string;
    userScores: UserScore[];
}
