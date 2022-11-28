import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  PredictionsState,
  PredictionStructure,
} from "../predictionsTypes";

const loadPredictionsReducer = (
  previousPredictions: PredictionsState,
  action: PayloadAction<PredictionStructure[]>
) => ({
  ...previousPredictions,
  predictions: [...action.payload],
});

export default loadPredictionsReducer;
