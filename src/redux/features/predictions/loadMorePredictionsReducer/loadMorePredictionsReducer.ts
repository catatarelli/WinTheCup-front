import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  PredictionsState,
  PredictionStructure,
} from "../predictionsTypes";

const loadMorePredictionsReducer = (
  previousPredictions: PredictionsState,
  action: PayloadAction<PredictionStructure[]>
) => ({
  ...previousPredictions,
  predictions: [...previousPredictions.predictions, ...action.payload],
});

export default loadMorePredictionsReducer;
