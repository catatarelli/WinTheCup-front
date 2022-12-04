export interface UiState {
  modal: string;
  isError: boolean;
  isLoading: boolean;
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

export interface ModalActionPayload {
  modal: string;
  isError: boolean;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
}
