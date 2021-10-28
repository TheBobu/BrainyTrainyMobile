export interface UserModel {
  email: string | null;
  password: string | null;
  info: PersonInfo;
  userId?: string | undefined | null;
}

export interface UserContextModel {
  authorizationToken: AuthorizationTokenModel;
  user: UserModel;
}

export interface AuthorizationTokenModel {
  token: string;
  tokenType: string;
}

export interface PersonInfo {
  address: string | null;
  age: number | null;
  contactPersonName: string | undefined | null;
  contactPersonNumber: string | undefined | null;
  fullName: string | null;
}
