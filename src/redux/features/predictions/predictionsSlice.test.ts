import { emptyPredictionsState } from "../../../mocks/predictionsMocks";
import { predictionsReducer } from "./predictionsSlice";

describe("Given a predictionsReducer", () => {
  describe("When it recieves an initial state with an empty user and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty user", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyPredictionsState,
      };

      const currentPredictionState = emptyPredictionsState;

      const newPredictionState = predictionsReducer(
        currentPredictionState,
        unknownAction
      );

      expect(newPredictionState).toStrictEqual(currentPredictionState);
    });
  });
});
