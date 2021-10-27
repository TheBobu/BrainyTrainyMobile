import { createContext } from "react";
import { LoginModel } from "../models/Login.model";
import { UserContextModel } from "../models/User.model";

export interface AuthContext {
    userData: UserContextModel | null;
    login: (formData: LoginModel) => void;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const authContext = createContext<AuthContext>({} as AuthContext)