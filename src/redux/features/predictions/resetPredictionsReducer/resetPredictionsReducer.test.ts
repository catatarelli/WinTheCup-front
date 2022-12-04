import resetPredictionsReducer from "./resetPredictionsReducer";
import { emptyPredictionsState } from "../../../../mocks/predictionsMocks";

describe("Given resetPredictionsReducer", () => {
  describe("When it recieves an initial state and a payload with a list of predictions ", () => {
    test("Then it should return a new state with the list of predictions", () => {
      const expectedPredictionsState = emptyPredictionsState;

      const newPredictionsState = resetPredictionsReducer();

      expect(newPredictionsState).toStrictEqual(expectedPredictionsState);
    });
  });
});
