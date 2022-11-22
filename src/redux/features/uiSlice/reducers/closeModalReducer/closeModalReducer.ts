import type { UiState } from "../../../../../types/uiTypes";

const closeModalreducer = (previousUi: UiState) => ({
  ...previousUi,
  modal: "",
});

export default closeModalreducer;
