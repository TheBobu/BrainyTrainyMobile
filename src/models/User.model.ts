export interface UserModel {
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
}

export interface UserContextModel {
    authorizationToken: AuthorizationTokenModel;
    user: UserModel;
}

export interface AuthorizationTokenModel {
    token: string;
    tokenType: string;
}