import {
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { useMutation } from "react-query";
import FullscreenSpinner from "../../components/FullscreenSpinner";
import { useAxios } from "../../context/AxiosContext";
import { UserModel } from "../../models/User.model";
import "./auth.css";

const Register: React.FC = () => {
  const [present, dismiss] = useIonToast();
  const [user, setUser] = useState<UserModel>({
    email: null,
    password: null,
    info: {
      address: null,
      age: null,
      contactPersonName: null,
      contactPersonNumber: null,
      fullName: null,
    },
  });

  const { authAxios } = useAxios();

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { mutate: register, isLoading } = useMutation(
    (formData: UserModel) => authAxios.post("Account/Register", formData),
    {
      onSuccess: () => {
        present({
          buttons: [
            {
              text: "hide",
              handler: () => {
                dismiss();
              },
            },
          ],
          message: "Account created successfully!",
          duration: 5000,
        });
      },
      onError: () => {
        present({
          buttons: [
            {
              text: "hide",
              handler: () => {
                dismiss();
              },
            },
          ],
          message: "Something went wrong!",
          duration: 5000,
        });
      },
    }
  );

  const submitForm = () => {
    if (user.password === confirmPassword) {
      register(user);
    } else {
      present({
        buttons: [
          {
            text: "hide",
            handler: () => {
              dismiss();
            },
          },
        ],
        message: "Passwords don't match.",
        duration: 5000,
      });
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <div className="Header">
            <div className="title">Welcome!</div>
            <div className="subtitle">Let's create your account!</div>
          </div>

          {isLoading ? (
            <FullscreenSpinner />
          ) : (
            <form>
              <IonCardContent className="input-container ic1">
                <IonItem>
                  <IonInput
                    className="input"
                    type="email"
                    value={user.email}
                    required
                    placeholder="Email"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        email: e.detail.value!,
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="text"
                    value={user.info.fullName}
                    required
                    placeholder="Full Name"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        info: {
                          ...user.info,
                          fullName: e.detail.value!,
                        },
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="number"
                    value={user.info.age}
                    required
                    placeholder="Age"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        info: {
                          ...user.info,
                          age: +e.detail.value!,
                        },
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="text"
                    value={user.info.address}
                    required
                    placeholder="Address"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        info: {
                          ...user.info,
                          address: e.detail.value!,
                        },
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="text"
                    value={user.info.contactPersonName}
                    placeholder="Enter a contact person's name"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        info: {
                          ...user.info,
                          contactPersonName: e.detail.value!,
                        },
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="text"
                    value={user.info.contactPersonNumber}
                    placeholder="Enter a contact person's phone"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        info: {
                          ...user.info,
                          contactPersonNumber: e.detail.value!,
                        },
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="password"
                    value={user.password}
                    required
                    placeholder="Password"
                    onIonChange={(e) =>
                      setUser({
                        ...user,
                        password: e.detail.value!,
                      })
                    }
                  />
                </IonItem>
                <IonItem className="input-container">
                  <IonInput
                    className="input"
                    type="password"
                    value={confirmPassword}
                    required
                    placeholder="Confirm password"
                    onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                  />
                </IonItem>

                <IonItem>
                  <button
                  className="loginBtn"
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    submitForm();
                  }}
                >
                  Register
                  </button>
                </IonItem>
              </IonCardContent>
            </form>
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
