import { type PayloadAction } from "@reduxjs/toolkit";
import { type Pagination, type UiState } from "../../uiTypes";

const loadPagesReducer = (
  previousUi: UiState,
  action: PayloadAction<Pagination>
) => ({
  ...previousUi,
  pagination: {
    currentPage: action.payload.currentPage,
    totalPages: action.payload.totalPages,
  },
});

export default loadPagesReducer;
