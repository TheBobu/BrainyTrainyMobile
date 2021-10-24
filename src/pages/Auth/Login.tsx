import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useAuth } from '../../hooks/Auth.hooks';
import { LoginModel } from '../../models/Login.model';
import './login.css'

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginModel>({ email: '', password: '' });

    const { login } = useAuth();

    const submitForm = () => {
        login(credentials);
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard className='content-wrap'>
                    <IonCardHeader>
                        <IonCardTitle>Login</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonItem>
                            <IonInput type='email' value={credentials.email} placeholder="Enter email" required onIonChange={e =>
                                setCredentials(
                                    {
                                        email: e.detail.value!,
                                        password: credentials.password
                                    }
                                )
                            } />

                        </IonItem>
                        <IonItem>
                            <IonInput type='password' value={credentials.password} placeholder="Enter password" required onIonChange={e =>
                                setCredentials(
                                    {
                                        email: credentials.email,
                                        password: e.detail.value!
                                    }
                                )} />
                        </IonItem>
                        <IonButton className='login-btn' color="primary" onClick={() => submitForm()}>Login</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default Login;


