import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../redux/features/ui/uiSlice";
import { userReducer } from "../redux/features/user/userSlice";
import { store } from "../redux/store";
import { mockUiStateErrorModal, mockUiStateSuccessModal } from "./uiMocks";
import { loggedInUserStateMock } from "./userMocks";

export const mockInitialStoreSuccessModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiStateSuccessModal,
    user: loggedInUserStateMock,
  },
});

export const mockInitialStoreErrorModal: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiStateErrorModal,
  },
});
