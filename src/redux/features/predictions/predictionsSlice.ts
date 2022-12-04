import { createSlice } from "@reduxjs/toolkit";
import loadPredictionsReducer from "./loadPredictionsReducer/loadPredictionsReducer";
import loadOnePredictionReducer from "./loadOnePredictionReducer/loadOnePredictionReducer";
import loadMorePredictionsReducer from "./loadMorePredictionsReducer/loadMorePredictionsReducer";
import type { PredictionsState } from "./predictionsTypes";
import resetPredictionsReducer from "./resetPredictionsReducer/resetPredictionsReducer";

export const predictionsInitialState: PredictionsState = {
  predictions: [],
  currentPrediction: {
    match: "",
    goalsTeam1: 0,
    goalsTeam2: 0,
    redCards: 0,
    yellowCards: 0,
    penalties: 0,
    picture: "",
    createdBy: "",
    id: "",
  },
};

const predictionsSlice = createSlice({
  name: "predictions",
  initialState: predictionsInitialState,
  reducers: {
    loadPredictionsReducer,
    loadOnePredictionReducer,
    loadMorePredictionsReducer,
    resetPredictionsReducer,
  },
});

export const predictionsReducer = predictionsSlice.reducer;
export const {
  loadPredictionsReducer: loadPredictionsActionCreator,
  loadOnePredictionReducer: loadOnePredictionActionCreator,
  loadMorePredictionsReducer: loadMorePredictionsActionCreator,
  resetPredictionsReducer: resetPredictionsActionCreator,
} = predictionsSlice.actions;
