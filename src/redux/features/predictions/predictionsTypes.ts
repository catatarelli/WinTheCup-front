export interface PredictionsState {
  predictions: PredictionStructure[];
  currentPrediction: PredictionStructure;
}

export interface CreatePredicitonStructure {
  match: string;
  goalsTeam1: number;
  goalsTeam2: number;
  redCards?: number;
  yellowCards?: number;
  penalties?: number;
  picture: unknown;
}
export interface PredictionStructure extends CreatePredicitonStructure {
  id: string;
  createdBy: string;
}

export interface PredictionsResponse {
  predictions: PredictionStructure[];
}
