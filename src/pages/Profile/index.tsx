import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import { callOutline, homeOutline, peopleCircleOutline } from "ionicons/icons";

import "./profile.css";
import "./../../theme/generalStyles.css";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks/Auth.hooks";
import { useAxios } from "../../context/AxiosContext";
import { UserModel } from "../../models/User.model";
import FullscreenSpinner from "../../components/FullscreenSpinner";

const Profile: React.FC = () => {

  const { authAxios } = useAxios();
  const { userData } = useAuth();
  const { data, isFetching, } = useQuery(["user", userData?.user.userId], () => authAxios.get<UserModel>(`User/${userData?.user.userId}`));
  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar>
          <IonTitle className="headerTitle">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {isFetching ? <FullscreenSpinner /> :
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card user-card">
                  <div className="card-block">
                    <div className="user-image">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        className="img-radius"
                        alt="User-Image"
                      ></img>
                    </div>
                    <h3 className="f-w-600 m-t-25 m-b-10">{data?.data.info.fullName}</h3>
                    <p className="text-muted">Age: {data?.data.info.age}</p>
                    {/* <div className="row">
                  <IonIcon className="pr-1" icon={homeOutline} /><p className="text-muted"> Address:</p>
                  </div> */}
                    <div className="bg-blue">
                      <p className="">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card user-card">
                  <div className="card-block">
                    <div className="justify-content-center">
                      <IonIcon
                        size="large"
                        className="pr-1 iconProfile"
                        icon={homeOutline}
                      ></IonIcon>
                      <br />
                      <span className="text-muted"> Address:</span>
                    </div>
                    <span className="text-muted">
                      {data?.data.info.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card user-card">
                  <div className="card-block">
                    <div className="justify-content-center ">
                      <IonIcon
                        size="large"
                        className="pr-1 iconProfile"
                        icon={peopleCircleOutline}
                      ></IonIcon>
                      <br />
                      <span className="text-muted"> Contact Person:</span>
                    </div>
                    <span className="text-muted"> {data?.data.info.contactPersonName}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <button className="button-emergency mt-3 mb-3 btn btn-lg">
                <IonIcon icon={callOutline} className="iconProfile pr-1" />
                Help
              </button>
            </div>
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Profile;
