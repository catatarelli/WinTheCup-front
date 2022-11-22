import { openModalActionCreator, uiReducer } from "../../uiSlice";

describe("Given openModalReducer", () => {
  describe("When it recieves an initial state and a payload with 'Register was successful'", () => {
    test("Then it should return a new state with the modal's value 'Register was successful' ", () => {
      const currentUiState = { modal: "" };
      const modalText = "Register was successful";

      const expectedUiState = { ...currentUiState, modal: modalText };

      const newUiState = uiReducer(
        currentUiState,
        openModalActionCreator(modalText)
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
