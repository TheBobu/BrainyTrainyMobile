import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import StatsComponent from "./StatsComponent";

const Stats: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <StatsComponent />
      </IonContent>
    </IonPage>
  );
};

export default Stats;
