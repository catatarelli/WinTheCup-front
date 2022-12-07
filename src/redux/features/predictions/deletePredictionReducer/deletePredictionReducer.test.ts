import { getRandomPredictionsList } from "../../../../mocks/predictionsFactory";
import { type PredictionsState } from "../predictionsTypes";
import deletePredictionReducer from "./deletePredictionReducer";

describe("Given deletePredictionReducer", () => {
  describe("When it recieves an initial state with a list of predictions and a payload with a prediction id", () => {
    test("Then it should return a new state with the list of predictions without the one with the id received", () => {
      const currentPredictions = getRandomPredictionsList(3);

      const currentPredictionsState: PredictionsState = {
        predictions: currentPredictions,
        currentPrediction: currentPredictions[0],
      };

      const expectedPredictionsState = {
        ...currentPredictionsState,
        predictions: currentPredictionsState.predictions.filter(
          (prediction) =>
            prediction.id !== currentPredictionsState.currentPrediction.id
        ),
      };

      const newPredictionsState = deletePredictionReducer(
        currentPredictionsState,
        {
          payload: currentPredictionsState.currentPrediction.id,
          type: "deletePrediction",
        }
      );

      expect(newPredictionsState).toStrictEqual(expectedPredictionsState);
    });
  });
});
