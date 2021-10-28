import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/Auth.hooks";

const Logout = () => {
  const { logout } = useAuth();

  const history = useHistory();
  useEffect(() => {
    logout();
    history.push("/login");
    window.location.reload();
  },[]);

  return <></>;
};

export default Logout;
