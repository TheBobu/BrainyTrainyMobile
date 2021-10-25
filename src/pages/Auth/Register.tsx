import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { useAxios } from '../../context/AxiosContext';
import { UserModel } from '../../models/User.model';

const Register: React.FC = () => {
    const [present, dismiss] = useIonToast();
    const [user, setUser] = useState<UserModel>(
        {
            email: null,
            password: null,
            info: {
                address: null,
                age: null,
                contactPersonName: null,
                contactPersonNumber: null,
                fullName: null,
            },
        }
    );

    const { authAxios } = useAxios();

    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const { mutate: register } = useMutation(
        (formData: UserModel) =>
            authAxios.post('Account/Register', formData),
        {
            onSuccess: () => {
                present({
                    buttons: [{ text: 'hide', handler: () => { dismiss(); } }],
                    message: 'Account created successfully!',
                    duration: 5000,
                });
            },
            onError: () => {
                present({
                    buttons: [{ text: 'hide', handler: () => { dismiss() } }],
                    message: 'Something went wrong!',
                    duration: 5000,
                });
            }
        }
    )

    const submitForm = () => {
        if (user.password === confirmPassword) {
            register(user)
        }
        else {
            present({
                buttons: [{ text: 'hide', handler: () => { dismiss() } }],
                message: "Passwords don't match.",
            });
        }
    }

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
                <form>
                    <IonItem>
                        <IonInput type='email' value={user.email} required placeholder="Email" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    email: e.detail.value!
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='text' value={user.info.fullName} required placeholder="Full Name" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    info: {
                                        ...user.info,
                                        fullName: e.detail.value!
                                    }
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='number' value={user.info.age} required placeholder="Age" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    info: {
                                        ...user.info,
                                        age: +e.detail.value!
                                    }
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='text' value={user.info.address} required placeholder="Address" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    info: {
                                        ...user.info,
                                        address: e.detail.value!
                                    }
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='text' value={user.info.contactPersonName} placeholder="Enter a contact person's name" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    info: {
                                        ...user.info,
                                        contactPersonName: e.detail.value!
                                    }
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='text' value={user.info.contactPersonNumber} placeholder="Enter a contact person's phone" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    info: {
                                        ...user.info,
                                        contactPersonNumber: e.detail.value!
                                    }
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='password' value={user.password} required placeholder="Password" onIonChange={e =>
                            setUser(
                                {
                                    ...user,
                                    password: e.detail.value!
                                })
                        } />
                    </IonItem>
                    <IonItem>
                        <IonInput type='password' value={confirmPassword} required placeholder="Confirm password" onIonChange={e => setConfirmPassword(e.detail.value!)
                        } />
                    </IonItem>

                    <IonButton className='login-btn' color="primary" onClick={(e) => { e.preventDefault(); submitForm() }}>Login</IonButton>
                </form>
            </IonContent>
        </IonPage >
    );
}

export default Register;
