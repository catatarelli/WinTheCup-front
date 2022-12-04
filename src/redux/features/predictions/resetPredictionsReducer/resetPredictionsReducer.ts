import type { PredictionsState } from "../predictionsTypes";

const resetPredictionsReducer = (): PredictionsState => ({
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
});

export default resetPredictionsReducer;
