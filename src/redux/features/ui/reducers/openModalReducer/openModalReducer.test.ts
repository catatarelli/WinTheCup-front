import { emptyModalMock } from "../../../../../mocks/uiMocks";
import type { UiState } from "../../uiTypes";
import openModalReducer from "./openModalReducer";

describe("Given an openModalReducer", () => {
  describe("When it recieves an initial state and a payload with 'Register was successful'", () => {
    test("Then it should return a new state with the modal's value 'Register was successful' ", () => {
      const currentUiState: UiState = emptyModalMock;

      const payload = {
        modal: "Register was successful",
        isError: false,
        isLoading: false,
      };
      const expectedUiState = {
        ...currentUiState,
        modal: payload.modal,
        isError: payload.isError,
      };

      const newUiState = openModalReducer(currentUiState, {
        payload,
        type: "openModalReducer",
      });

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
