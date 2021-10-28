import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Quiz from './Quiz';

const Puzzle:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Puzzle</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Puzzle</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Quiz/>
            </IonContent>
        </IonPage>
        )
}

export default Puzzle;