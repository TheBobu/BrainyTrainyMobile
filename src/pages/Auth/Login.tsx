import {
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
} from "@ionic/react";
import { useState } from "react";
import FullscreenSpinner from "../../components/FullscreenSpinner";
import { useAuth } from "../../hooks/Auth.hooks";
import { LoginModel } from "../../models/Login.model";
import "./auth.css";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginModel>({
    email: "",
    password: "",
  });

  const { login, isLoading } = useAuth();

  const submitForm = async () => {
    login(credentials);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        {isLoading ? (
          <FullscreenSpinner />
        ) : (
          <>
            <IonCard className="IonCardPos">
              <div className="Header">
                <div className="title">Welcome back!</div>
                <div className="subtitle">Login</div>
              </div>
              <IonCardContent className="input-container ic1">
                <IonItem>
                  <IonInput
                    className="input"
                    type="email"
                    value={credentials.email}
                    placeholder="Enter email"
                    required
                    onIonChange={(e) =>
                      setCredentials({
                        email: e.detail.value!,
                        password: credentials.password,
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="password"
                    value={credentials.password}
                    placeholder="Enter password"
                    required
                    onIonChange={(e) =>
                      setCredentials({
                        email: credentials.email,
                        password: e.detail.value!,
                      })
                    }
                  />
                </IonItem>
                <IonItem>
                  <button
                    className="loginBtn"
                    color="primary"
                    onClick={() => submitForm()}
                  >
                    Login
                  </button>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
