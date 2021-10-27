import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

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
                
            </IonContent>
        </IonPage>
        )
}

export default Puzzle;