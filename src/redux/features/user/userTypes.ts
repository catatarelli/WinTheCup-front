export interface UserLoginData {
  id: string;
  token: string;
  username: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface RegisterData extends UserCredentials {
  email: string;
}
