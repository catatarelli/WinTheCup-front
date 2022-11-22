import { emptyModalMock } from "../../../mocks/uiMocks";
import { uiReducer } from "./uiSlice";

describe("Given uiReducer", () => {
  describe("When it recieves an initial state with an empty modal and unknown action", () => {
    test("Then it should return a new state with a copy of the empty modal", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyModalMock,
      };

      const currentUiState = emptyModalMock;

      const newUiState = uiReducer(currentUiState, unknownAction);

      expect(newUiState).toStrictEqual(currentUiState);
    });
  });
});
