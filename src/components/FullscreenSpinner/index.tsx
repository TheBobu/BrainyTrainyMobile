import { IonSpinner } from "@ionic/react";
import "./spinner.css";

const FullscreenSpinner = () => {
  return (
    <div className="fullscreen-spinner">
      {" "}
      <IonSpinner name="crescent" />
    </div>
  );
};

export default FullscreenSpinner;
