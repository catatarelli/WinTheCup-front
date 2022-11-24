import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { store } from "../redux/store";
import { mockUiStateErrorModal, mockUiStateSuccessModal } from "./uiMocks";

export const mockInitialStoreSuccessModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: mockUiStateSuccessModal,
  },
});

export const mockInitialStoreErrorModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: mockUiStateErrorModal,
  },
});
