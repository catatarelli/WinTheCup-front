import type { UiState } from "../../uiTypes";

const hideLoadingReducer = (previousUi: UiState) => ({
  ...previousUi,
  isLoading: false,
});

export default hideLoadingReducer;
