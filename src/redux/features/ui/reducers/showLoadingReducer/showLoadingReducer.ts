import type { UiState } from "../../uiTypes";

const showLoadingReducer = (previousUi: UiState) => ({
  ...previousUi,
  isLoading: true,
});

export default showLoadingReducer;
