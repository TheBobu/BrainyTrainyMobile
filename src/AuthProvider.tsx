import React from 'react';
import axios, { AxiosError } from 'axios';
import { UserContextModel } from './models/User.model';
import { LoginModel } from './models/Login.model';
import useLocalStorage from './hooks/LocalStorage.hooks';
import { authContext } from './context/AuthContext';


export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useLocalStorage(
        'userData',
        {} as UserContextModel
    );
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
        'isAuthenticated',
        false
    );

    const login = React.useCallback(
        async (formData: LoginModel) => {
            axios
                .post(`${process.env.REACT_APP_BASE_URL}/Account/Login`, formData)
                .then((result) => {
                    setUserData(result.data as UserContextModel);
                    setIsAuthenticated(true);
                })
                .catch((error: AxiosError) => {
                    console.error({
                        message: `Something went wrong! ${error.code}` 
                    });
                });
        },
        [setIsAuthenticated, setUserData]
    );

    const logout = React.useCallback(async () => {
        setUserData({} as UserContextModel);
        setIsAuthenticated(false);
    }, [setIsAuthenticated, setUserData]);

    return (
        <authContext.Provider
            value={{
                userData,
                login,
                logout,
                isAuthenticated,
            }}
        >
            {children}
        </authContext.Provider>
    );
};