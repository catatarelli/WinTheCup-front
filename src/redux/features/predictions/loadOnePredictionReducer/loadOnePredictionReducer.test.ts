import { getRandomPrediction } from "../../../../mocks/predictionsFactory";
import type { PredictionStructure } from "../predictionsTypes";
import { emptyPredictionsState } from "../../../../mocks/predictionsMocks";
import loadOnePredictionReducer from "./loadOnePredictionReducer";

const prediction = getRandomPrediction() as PredictionStructure;

describe("Given loadOnePredictionReducer", () => {
  describe("When it recieves an initial state and a payload with a prediction", () => {
    test("Then it should return a new state with the currentPrediction set to the prediction received", () => {
      const currentPredictionsState = emptyPredictionsState;

      const expectedPredictionsState = {
        ...currentPredictionsState,
        currentPrediction: prediction,
      };

      const newPredictionsState = loadOnePredictionReducer(
        currentPredictionsState,
        {
          payload: prediction,
          type: "loadOnePrediction",
        }
      );

      expect(newPredictionsState).toStrictEqual(expectedPredictionsState);
    });
  });
});
