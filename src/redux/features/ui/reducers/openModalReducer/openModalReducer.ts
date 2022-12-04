import type { PayloadAction } from "@reduxjs/toolkit";
import type { ModalActionPayload, UiState } from "../../uiTypes";

const openModalReducer = (
  previousUi: UiState,
  action: PayloadAction<ModalActionPayload>
) => ({
  ...previousUi,
  modal: action.payload.modal,
  isError: action.payload.isError,
});

export default openModalReducer;
