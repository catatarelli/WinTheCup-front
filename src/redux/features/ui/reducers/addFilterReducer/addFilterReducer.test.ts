import { mockUiStateSuccessModal } from "../../../../../mocks/uiMocks";
import addFilterReducer from "./addFilterReducer";

describe("Given a addFilterReducer", () => {
  describe("When it recieves an initial state with 'Argentina'", () => {
    test("Then it should return a new state with filter property set to 'Argentina' and current page 0", () => {
      const currentUiState = mockUiStateSuccessModal;

      const payload = "Argentina";

      const expectedUiState = {
        ...currentUiState,
        filter: payload,
        pagination: { ...currentUiState.pagination, currentPage: 0 },
      };

      const newUiState = addFilterReducer(currentUiState, {
        payload,
        type: "addFilter",
      });

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
