import { createSlice } from "@reduxjs/toolkit";
import { type UiState } from "./uiTypes";
import closeModalReducer from "./reducers/closeModalReducer/closeModalReducer";
import openModalReducer from "./reducers/openModalReducer/openModalReducer";
import showLoadingReducer from "./reducers/showLoadingReducer/showLoadingReducer";
import hideLoadingReducer from "./reducers/hideLoadingReducer/hideLoadingReducer";
import loadPagesReducer from "./reducers/loadPagesReducer/loadPagesReducer";
import goToNextPageReducer from "./reducers/goToNextPageReducer/goToNextPageReducer";
import resetUiReducer from "./reducers/resetUiReducer/resetUiReducer";
import addFilterReducer from "./reducers/addFilterReducer/addFilterReducer";

const uiInitialState: UiState = {
  modal: "",
  isError: false,
  isLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModalReducer,
    closeModalReducer,
    showLoadingReducer,
    hideLoadingReducer,
    loadPagesReducer,
    goToNextPageReducer,
    resetUiReducer,
    addFilterReducer,
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModalReducer: openModalActionCreator,
  closeModalReducer: closeModalActionCreator,
  showLoadingReducer: showLoadingActionCreator,
  hideLoadingReducer: hideLoadingActionCreator,
  loadPagesReducer: loadPagesActionCreator,
  goToNextPageReducer: goToNextPageActionCreator,
  resetUiReducer: resetUiActionCreator,
  addFilterReducer: addFilterActionCreator,
} = uiSlice.actions;
