import { IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import { useQuery } from "react-query";
import FullscreenSpinner from "../../components/FullscreenSpinner";
import { useAxios } from "../../context/AxiosContext";
import { useAuth } from "../../hooks/Auth.hooks";
import "./leaderboard.css";
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
      <IonSlide key={key}>
        <h2>{item.game}</h2>
        <div>
          <LeaderboardTable userScore={item.userScores} />
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
