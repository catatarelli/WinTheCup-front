import { getRandomPredictionsList } from "../../../../mocks/predictionsFactory";
import { userMock } from "../../../../mocks/userMocks";
import type { PredictionStructure } from "../../user/userTypes";
import loadPredictionsReducer from "./loadPredictionsReducer";

const listOfPredictions = getRandomPredictionsList(2) as PredictionStructure[];

describe("Given loadPredictionsReducer", () => {
  describe("When it recieves an initial state and a payload ", () => {
    test("Then it should return a new state with a", () => {
      const currentUserState = userMock;

      const expectedUserState = {
        ...currentUserState,
        predictions: listOfPredictions,
      };

      const newUserState = loadPredictionsReducer(currentUserState, {
        payload: listOfPredictions,
        type: "loadPredictions",
      });

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
