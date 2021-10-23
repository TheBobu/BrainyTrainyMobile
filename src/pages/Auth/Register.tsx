import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Register</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonInput type='email' value={email} placeholder="Enter email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default Register;