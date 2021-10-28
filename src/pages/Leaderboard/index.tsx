import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LeaderboardComponent from "./LeaderboardComponent";

const Leaderboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Leaderboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LeaderboardComponent />
      </IonContent>
    </IonPage>
  );
};

export default Leaderboard;
