import type { UiState } from "../redux/features/ui/uiTypes.js";

export const emptyModalMock: UiState = {
  modal: "",
  isError: false,
  isLoading: false,
};

export const mockUiStateSuccessModal: UiState = {
  modal: "Account created successfully",
  isError: false,
  isLoading: false,
};

export const mockUiStateErrorModal: UiState = {
  modal: "User is already registered",
  isError: true,
  isLoading: false,
};

export const mockUiState: UiState = {
  modal: "",
  isError: false,
  isLoading: true,
};
