import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Matching:React.FC = () => {
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
                
            </IonContent>
        </IonPage>
        )
}

export default Matching;