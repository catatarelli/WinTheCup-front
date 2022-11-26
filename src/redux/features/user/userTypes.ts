export interface PredictionStructure {
  match: string;
  goalsTeam1: number;
  goalsTeam2: number;
  redCards: number;
  yellowCards: number;
  penalties: number;
  picture: string;
}

export interface UserLoginData {
  id: string;
  token: string;
  username: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
  predictions: PredictionStructure[];
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
}
