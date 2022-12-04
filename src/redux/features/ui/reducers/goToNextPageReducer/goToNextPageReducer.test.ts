import type { UiState } from "../../uiTypes";
import goToNextPageReducer from "./goToNextPageReducer";
import { emptyModalMock } from "../../../../../mocks/uiMocks";

describe("Given goToNextPage reducer", () => {
  describe("When it receives an initial state with currentPage: 0", () => {
    test("Then it should return the new state with currentPage: 1", () => {
      const currentUiState: UiState = emptyModalMock;

      const expectedUiState = {
        ...currentUiState,
        pagination: {
          ...currentUiState.pagination,
          currentPage: currentUiState.pagination.currentPage + 1,
        },
      };

      const newUiState = goToNextPageReducer(currentUiState);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
