import { useEffect } from "react";
import { useAuth } from "../../hooks/Auth.hooks";

const Logout = () => {

    const { logout } = useAuth();

    useEffect(() => {
        logout();
    })

    return <></>
}

export default Logout;