import type { UiState } from "../../uiTypes";

const resetUiReducer = (): UiState => ({
  modal: "",
  isError: false,
  isLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
});

export default resetUiReducer;
