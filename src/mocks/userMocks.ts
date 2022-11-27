import type {
  PredictionByIdResponse,
  PredictionsResponse,
  UserState,
} from "../redux/features/user/userTypes";
import {
  getRandomPrediction,
  getRandomPredictionsList,
} from "./predictionsFactory";

export const registerDataMock = {
  username: "pepito123",
  password: "pepito123",
  email: "pepito@gmail.com",
};

export const userMock = {
  id: "asdf234",
  username: "luis123",
  token: "testtoken",
  isLogged: false,
  predictions: [],
};

export const emptyUserMock = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const loggedInUserStateMock: UserState = {
  ...userMock,
  isLogged: true,
};

export const mockgetPredictionsResponse: PredictionsResponse = {
  predictions: getRandomPredictionsList(10),
};

export const mockUserWithPredictions = {
  ...userMock,
  predictions: getRandomPredictionsList(5),
};

export const mockGetPredictionByIdResponse: PredictionByIdResponse = {
  prediction: { ...getRandomPrediction(), id: "56789" },
};
