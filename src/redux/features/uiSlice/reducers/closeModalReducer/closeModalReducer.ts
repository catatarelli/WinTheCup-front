import type { UiState } from "../../uiTypes";

const closeModalreducer = (previousUi: UiState) => ({
  ...previousUi,
  modal: "",
});

export default closeModalreducer;
