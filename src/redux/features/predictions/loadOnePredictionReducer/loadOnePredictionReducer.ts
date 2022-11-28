import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  PredictionsState,
  PredictionStructure,
} from "../predictionsTypes";

const loadOnePredictionReducer = (
  previousPredictions: PredictionsState,
  action: PayloadAction<PredictionStructure>
) => ({
  ...previousPredictions,
  currentPrediction: action.payload,
});

export default loadOnePredictionReducer;
