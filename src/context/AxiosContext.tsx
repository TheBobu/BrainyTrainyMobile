import React from 'react';
import axios, { AxiosInstance } from 'axios';
import { useAuth } from '../hooks/Auth.hooks';

export interface AxiosContext {
    authAxios: AxiosInstance;
}
const axiosContext = React.createContext({} as AxiosContext);

export const AxiosProvider: React.FC = ({ children }) => {
    const { userData, isAuthenticated } = useAuth();

    const authAxios = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}`,
    });


    authAxios.interceptors.request.use(
        (config) => {
            if (userData && isAuthenticated) {
                if(config.headers)
                    config.headers.Authorization = `Bearer ${userData.authorizationToken.token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    return (
        <axiosContext.Provider value={{ authAxios }}>
            {children}
        </axiosContext.Provider>
    );
};

export const useAxios = () => React.useContext(axiosContext);