import type { UiState } from "../redux/features/ui/uiTypes.js";

export const emptyModalMock: UiState = {
  modal: "",
  isError: false,
  isLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
};

export const mockUiStateSuccessModal: UiState = {
  modal: "Account created successfully",
  isError: false,
  isLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
};

export const mockUiStateErrorModal: UiState = {
  modal: "User is already registered",
  isError: true,
  isLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
};

export const mockUiState: UiState = {
  modal: "",
  isError: false,
  isLoading: true,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
  filter: "",
};
