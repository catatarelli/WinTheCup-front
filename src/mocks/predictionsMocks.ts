import {
  type PredictionsState,
  type PredictionsResponse,
  type PredictionStructure,
  type CreatePredicitonStructure,
} from "../redux/features/predictions/predictionsTypes";
import {
  getRandomPrediction,
  getRandomPredictionsList,
} from "./predictionsFactory";

export const mockgetPredictionsResponse: PredictionsResponse = {
  isNextPage: true,
  isPreviousPage: false,
  totalPages: 2,
  predictions: getRandomPredictionsList(10),
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
    picture: "",
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
  picture: "asdf",
};

export const mockPredictionCreateRepeated: CreatePredicitonStructure = {
  match: "Argentina vs Mexico",
  goalsTeam1: 3,
  goalsTeam2: 2,
};

export const mockPredictionCreate: CreatePredicitonStructure = {
  match: "Argentina vs Poland",
  goalsTeam1: 3,
  goalsTeam2: 2,
};

export const mockPredictionsState: PredictionsState = {
  predictions: getRandomPredictionsList(10),
  currentPrediction: currentPredictionMock,
};

export const mockGetPredictionByIdResponse: PredictionStructure = {
  ...getRandomPrediction(),
  id: "56789",
};

export const matchesMock = [
  { label: "Argentina vs Chile", value: "Argentina vs Chile" },
  { label: "Mexico vs Poland", value: "Mexico vs Poland" },
];
