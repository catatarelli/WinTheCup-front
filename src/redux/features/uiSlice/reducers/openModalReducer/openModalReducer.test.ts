import { openModalActionCreator, uiReducer } from "../../uiSlice";

describe("Given openModalReducer", () => {
  describe("When it recieves an initial state and a payload with 'Register was successful'", () => {
    test("Then it should return a new state with the modal's value 'Register was successful' ", () => {
      const currentUiState = { modal: "", isError: false };

      const payload = {
        modal: "Register was successful",
        isError: false,
      };
      const expectedUiState = {
        ...currentUiState,
        modal: payload.modal,
        isError: payload.isError,
      };

      const newUiState = uiReducer(
        currentUiState,
        openModalActionCreator(payload)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
