import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './login.css'

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard className='content-wrap'>
                    <IonCardHeader>
                        <IonCardTitle>Login</IonCardTitle>
                    </IonCardHeader>
                
                    <IonCardContent >
                        <IonItem>
                            <IonInput type='email' value={email} placeholder="Enter email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput type='password' value={password} placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                        </IonItem>
                        <IonButton className='login-btn' color="primary">Login</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default Login;