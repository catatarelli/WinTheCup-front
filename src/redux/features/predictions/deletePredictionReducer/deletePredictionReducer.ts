import type { PayloadAction } from "@reduxjs/toolkit";
import type { PredictionsState } from "../predictionsTypes";

const deletePredictionReducer = (
  previousPredictions: PredictionsState,
  action: PayloadAction<string>
) => ({
  ...previousPredictions,
  predictions: previousPredictions.predictions.filter(
    (prediction) => prediction.id !== action.payload
  ),
});

export default deletePredictionReducer;
