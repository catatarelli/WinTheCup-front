import type { PayloadAction } from "@reduxjs/toolkit";
import type { UiState } from "../../../../../types/uiTypes";

const openModalReducer = (
  previousUi: UiState,
  action: PayloadAction<string>
) => ({
  ...previousUi,
  modal: action.payload,
});

export default openModalReducer;
