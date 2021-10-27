import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, logInOutline, logOutOutline, peopleOutline, personOutline } from 'ionicons/icons';
import React from 'react'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import { useAuth } from './hooks/Auth.hooks';
import Register from './pages/Auth/Register';
import Logout from './pages/Auth/Logout';
import Matching from './pages/Games/Matching';

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        {!isAuthenticated ? <Home /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/profile">
                        {isAuthenticated ? <Profile /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/matching">
                        {isAuthenticated ? <Matching /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/login">
                        {!isAuthenticated ? <Login /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/register">
                        {!isAuthenticated ? <Register /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/logout">
                        {isAuthenticated ? <Logout />: <Redirect to="/" />}
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                {
                    isAuthenticated ?
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="home" href="/home">
                                <IonIcon icon={homeOutline} />
                                <IonLabel>Home</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="profile" href="/profile">
                                <IonIcon icon={personOutline} />
                                <IonLabel>Profile</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="logout" href="/logout">
                                <IonIcon icon={logOutOutline} />
                                <IonLabel>Log Out</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                        : <IonTabBar slot="bottom">
                            <IonTabButton tab="login" href="/login">
                                <IonIcon icon={logInOutline} />
                                <IonLabel>Log In</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="register" href="/register">
                                <IonIcon icon={peopleOutline} />
                                <IonLabel>Register</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                }
            </IonTabs>
        </IonReactRouter>
    )
}

export default AppRoutes;