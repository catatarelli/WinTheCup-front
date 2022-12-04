import type { Pagination, UiState } from "../../uiTypes";
import loadPagesReducer from "./loadPagesReducer";
import { emptyModalMock } from "../../../../../mocks/uiMocks";

describe("Given loadPages reducer", () => {
  describe("When it receives an initial state and pagination with currentPage: 0 and totalPages: 3", () => {
    test("Then it should return the new state with pagination numbers", () => {
      const payload: Pagination = {
        currentPage: 0,
        totalPages: 3,
      };

      const currentUiState: UiState = emptyModalMock;

      const expectedUiState = {
        ...currentUiState,
        pagination: {
          currentPage: payload.currentPage,
          totalPages: payload.totalPages,
        },
      };

      const newUiState = loadPagesReducer(currentUiState, {
        payload,
        type: "loadPages",
      });

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
