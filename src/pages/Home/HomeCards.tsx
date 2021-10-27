import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { extensionPuzzleOutline, gridOutline, helpOutline, homeOutline, listOutline, personOutline, shapesOutline } from "ionicons/icons";

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
              <p>MATCHING </p>
            </IonCard>
          </a>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol >
          <IonCard className="homeCard-white text-dark">
            <IonIcon className="pr-1 text-dark" icon={helpOutline} />
            <p>QUIZ </p>
          </IonCard>
        </IonCol>
        <IonCol >
          <IonCard className="homeCard-blue text-white">
            <IonIcon className="pr-1" icon={extensionPuzzleOutline} />
            <p>PUZZLE </p>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol >
          <IonCard className="homeCard-blue text-white">
            <IonIcon className="pr-1 " icon={gridOutline} />
            <p>SUDOKU </p>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonCard className="homeCard-white text-dark">
            <IonIcon className="pr-3 " icon={listOutline} />
            <p>TO DO LIST </p>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
export default HomeCards;
