import type { PayloadAction } from "@reduxjs/toolkit";
import type { UiState } from "../../uiTypes";

const openModalReducer = (
  previousUi: UiState,
  action: PayloadAction<UiState>
) => ({
  ...previousUi,
  modal: action.payload.modal,
  isError: action.payload.isError,
});

export default openModalReducer;
