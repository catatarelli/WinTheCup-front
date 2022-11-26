import closeModalReducer from "./closeModalReducer";

describe("Given a closeModalReducer", () => {
  describe("When it recieves an initial state with 'Register was successful'", () => {
    test("Then it should return a new state with an empty modal", () => {
      const currentUiState = {
        modal: "Register was successful",
        isError: false,
        isLoading: false,
      };

      const expectedUiState = { ...currentUiState, modal: "" };

      const newUiState = closeModalReducer(currentUiState);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});