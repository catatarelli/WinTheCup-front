import { createSlice } from "@reduxjs/toolkit";
import loadPredictionsReducer from "./loadPredictionsReducer/loadPredictionsReducer";
import loadOnePredictionReducer from "./loadOnePredictionReducer/loadOnePredictionReducer";
import type { PredictionsState } from "./predictionsTypes";

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
  },
});

export const predictionsReducer = predictionsSlice.reducer;
export const {
  loadPredictionsReducer: loadPredictionsActionCreator,
  loadOnePredictionReducer: loadOnePredictionActionCreator,
} = predictionsSlice.actions;
