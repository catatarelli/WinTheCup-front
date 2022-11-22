import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UiState } from "../../../types/uiTypes";
import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";

const uiInitialState: UiState = {
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModalReducer,
    closeModalReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
} = uiSlice.actions;