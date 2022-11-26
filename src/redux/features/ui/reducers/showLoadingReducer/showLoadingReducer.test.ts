import { mockUiStateErrorModal } from "../../../../../mocks/uiMocks";
import showLoadingReducer from "./showLoadingReducer";

describe("Given a showLoadingReducer", () => {
  describe("When it receives an initial ui state", () => {
    test("Then it should return a copy of the initial state with isLoading true", () => {
      const expectedUiState = {
        ...mockUiStateErrorModal,
        isLoading: true,
      };

      const newUiState = showLoadingReducer(mockUiStateErrorModal);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
