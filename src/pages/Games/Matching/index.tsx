import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MatchingGame from './MatchingGame';
import './matching.css'

const Matching: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Matching</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Matching</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <MatchingGame />
            </IonContent>
        </IonPage>
    )
}

export default Matching;