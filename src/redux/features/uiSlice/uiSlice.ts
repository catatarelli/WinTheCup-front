import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type UiState } from "../../../types/uiTypes";
import closeModalreducer from "./reducers/closeModalReducer/closeModalreducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";

const uiInitialState: UiState = {
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModalReducer,
    closeModalreducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalreducer: closeModalActionCreator,
} = uiSlice.actions;
