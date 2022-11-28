import { configureStore } from "@reduxjs/toolkit";
import { predictionsReducer } from "../redux/features/predictions/predictionsSlice";
import { uiReducer } from "../redux/features/ui/uiSlice";
import { userReducer } from "../redux/features/user/userSlice";
import type { store } from "../redux/store";
import { mockPredictionsState } from "./predictionsMocks";
import { mockUiStateErrorModal, mockUiStateSuccessModal } from "./uiMocks";
import { loggedInUserStateMock } from "./userMocks";

export const mockInitialStoreSuccessModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    predictions: predictionsReducer,
  },
  preloadedState: {
    ui: mockUiStateSuccessModal,
    user: loggedInUserStateMock,
    predictions: mockPredictionsState,
  },
});

export const mockInitialStoreErrorModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    predictions: predictionsReducer,
  },
  preloadedState: {
    ui: mockUiStateErrorModal,
  },
});
