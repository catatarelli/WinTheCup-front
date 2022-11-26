import type { PayloadAction } from "@reduxjs/toolkit";
import type { PredictionStructure, UserState } from "../../userTypes";

const loadPredictionsReducer = (
  previousUser: UserState,
  action: PayloadAction<PredictionStructure[]>
) => ({
  ...previousUser,
  predictions: [...action.payload],
});

export default loadPredictionsReducer;
