import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./uiTypes";
import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";
import showLoadingReducer from "./reducers/showLoadingReducer/showLoadingReducer";
import hideLoadingReducer from "./reducers/hideLoadingReducer/hideLoadingReducer";

const uiInitialState: UiState = {
  modal: "",
  isError: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModalReducer,
    closeModalReducer,
    showLoadingReducer,
    hideLoadingReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
  showLoadingReducer: showLoadingActionCreator,
  hideLoadingReducer: hideLoadingActionCreator,
} = uiSlice.actions;
