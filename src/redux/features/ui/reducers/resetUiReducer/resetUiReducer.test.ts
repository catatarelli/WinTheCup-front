import resetUiReducer from "./resetUiReducer";

describe("Given a resetUiReducer", () => {
  describe("When it recieves an initial state", () => {
    test("Then it should return a new state with a the initial state", () => {
      const expectedUiState = {
        modal: "",
        isError: false,
        isLoading: false,
        pagination: {
          currentPage: 0,
          totalPages: 0,
        },
      };

      const newUiState = resetUiReducer();

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
