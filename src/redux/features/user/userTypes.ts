export interface UserLoginData {
  id: string;
  token: string;
  username: string;
  email: string;
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

export interface LoginResponse {
  token: string;
  email: string;
}

export interface EditUserPayload {
  username?: string;
  email?: string;
}
export interface EditUserResponse {
  username: string;
  email: string;
  id: string;
}

export interface EditUserStructure {
  username?: string;
  password?: string;
  email?: string;
}
