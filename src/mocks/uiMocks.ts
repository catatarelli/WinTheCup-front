import type { UiState } from "../redux/features/uiSlice/uiTypes.js";

export const emptyModalMock: UiState = {
  modal: "",
  isError: false,
};

export const mockUiStateSuccessModal: UiState = {
  modal: "Account created successfully",
  isError: false,
};

export const mockUiStateErrorModal: UiState = {
  modal: "User is already registered",
  isError: true,
};
