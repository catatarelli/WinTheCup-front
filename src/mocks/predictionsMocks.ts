import { type ImageSourcePropType } from "react-native";
import {
  type PredictionsState,
  type PredictionsResponse,
  type PredictionStructure,
} from "../redux/features/predictions/predictionsTypes";
import {
  getRandomPrediction,
  getRandomPredictionsList,
} from "./predictionsFactory";

export const mockgetPredictionsResponse: PredictionsResponse = {
  predictions: getRandomPredictionsList(10) as PredictionStructure[],
};

export const emptyPredictionsState = {
  predictions: [],
  currentPrediction: {
    match: "",
    goalsTeam1: 0,
    goalsTeam2: 0,
    redCards: 0,
    yellowCards: 0,
    penalties: 0,
    picture: "" as ImageSourcePropType,
    createdBy: "",
    id: "",
  },
};

export const currentPredictionMock: PredictionStructure = {
  match: "Argentina vs Mexico",
  goalsTeam1: 3,
  goalsTeam2: 2,
  createdBy: "543",
  id: "234",
  picture: "asdf" as ImageSourcePropType,
};

export const mockPredictionsState: PredictionsState = {
  predictions: getRandomPredictionsList(10) as PredictionStructure[],
  currentPrediction: currentPredictionMock,
};

export const mockGetPredictionByIdResponse: PredictionStructure = {
  ...(getRandomPrediction() as PredictionStructure),
  id: "56789",
};
