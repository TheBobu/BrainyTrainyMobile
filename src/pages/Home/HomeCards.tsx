import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { extensionPuzzleOutline, gridOutline, helpOutline, listOutline, personOutline, podiumOutline, shapesOutline, statsChartOutline } from "ionicons/icons";

const HomeCards: React.FC = () => (
  <IonContent >
    <IonGrid>
      <IonRow>
        <IonCol >
          <a href='/profile'>
            <IonCard className="homeCard-blue text-white">
              <IonIcon className="pr-1 " icon={personOutline} />
              <p>PROFILE</p>
            </IonCard>
          </a>
        </IonCol>
        <IonCol>
          <a href='/matching'>
            <IonCard className="homeCard-white text-dark">
              <IonIcon className="pr-1" icon={shapesOutline} />
              <p>MATCHING</p>
            </IonCard>
          </a>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol >
          <a href='/quiz'>
            <IonCard className="homeCard-white text-dark">
              <IonIcon className="pr-1 text-dark" icon={helpOutline} />
              <p>QUIZ</p>
            </IonCard>
          </a>
        </IonCol>
        <IonCol >
          <a href='/todolist'>
            <IonCard className="homeCard-blue text-white">
              <IonIcon className="pr-3 " icon={listOutline} />
              <p>TO DO LIST</p>
            </IonCard>
          </a>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol >
          <a href='/stats'>
            <IonCard className="homeCard-blue text-white">
              <IonIcon className="pr-1 " icon={statsChartOutline} />
              <p>STATS</p>
            </IonCard>
          </a>
        </IonCol>
        <IonCol>
          <a href='leaderboard'>
            <IonCard className="homeCard-white text-dark">
              <IonIcon className="pr-1" icon={podiumOutline} />
              <p>LEADERBOARD</p>
            </IonCard>
          </a>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
export default HomeCards;
