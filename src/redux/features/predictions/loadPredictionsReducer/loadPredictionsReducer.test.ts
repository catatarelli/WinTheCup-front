import { getRandomPredictionsList } from "../../../../mocks/predictionsFactory";
import loadPredictionsReducer from "./loadPredictionsReducer";
import { emptyPredictionsState } from "../../../../mocks/predictionsMocks";

const listOfPredictions = getRandomPredictionsList(2);

describe("Given loadPredictionsReducer", () => {
  describe("When it recieves an initial state and a payload with a list of predictions ", () => {
    test("Then it should return a new state with the list of predictions", () => {
      const currentPredictionsState = emptyPredictionsState;

      const expectedPredictionsState = {
        ...currentPredictionsState,
        predictions: listOfPredictions,
      };

      const newPredictionsState = loadPredictionsReducer(
        currentPredictionsState,
        {
          payload: listOfPredictions,
          type: "loadPredictions",
        }
      );

      expect(newPredictionsState).toStrictEqual(expectedPredictionsState);
    });
  });
});
