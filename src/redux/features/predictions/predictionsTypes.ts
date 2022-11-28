import type { ImageSourcePropType } from "react-native";

export interface PredictionsState {
  predictions: PredictionStructure[];
  currentPrediction: PredictionStructure;
}

export interface PredictionStructure {
  match: string;
  goalsTeam1: number;
  goalsTeam2: number;
  redCards?: number;
  yellowCards?: number;
  penalties?: number;
  picture: ImageSourcePropType;
  id: string;
  createdBy: string;
}

export interface PredictionsResponse {
  predictions: PredictionStructure[];
}

export interface PredictionByIdResponse {
  prediction: PredictionStructure;
}
