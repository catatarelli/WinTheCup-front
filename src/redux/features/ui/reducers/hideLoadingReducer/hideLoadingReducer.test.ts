import { mockUiState } from "../../../../../mocks/uiMocks";
import { hideLoadingActionCreator, uiReducer } from "../../uiSlice";

describe("Given a hideLoadingReducer", () => {
  describe("When it receives an initial ui state", () => {
    test("Then it should return a copy of the initial state with isLoading false", () => {
      const expectedUiState = {
        ...mockUiState,
        isLoading: false,
      };

      const newUiState = uiReducer(mockUiState, hideLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
