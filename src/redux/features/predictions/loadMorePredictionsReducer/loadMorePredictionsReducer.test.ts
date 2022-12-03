import { getRandomPredictionsList } from "../../../../mocks/predictionsFactory";
import { mockPredictionsState } from "../../../../mocks/predictionsMocks";
import loadMorePredictionsReducer from "./loadMorePredictionsReducer";

const listOfPredictions = getRandomPredictionsList(2);

describe("Given loadMorePredictionsReducer", () => {
  describe("When it recieves an initial state and a payload with a list of predictions ", () => {
    test("Then it should return a new state adding the list of predictions received", () => {
      const currentPredictionsState = mockPredictionsState;

      const expectedPredictionsState = {
        ...currentPredictionsState,
        predictions: [
          ...currentPredictionsState.predictions,
          ...listOfPredictions,
        ],
      };

      const newPredictionsState = loadMorePredictionsReducer(
        currentPredictionsState,
        {
          payload: listOfPredictions,
          type: "loadMorePredictions",
        }
      );

      expect(newPredictionsState).toStrictEqual(expectedPredictionsState);
    });
  });
});
