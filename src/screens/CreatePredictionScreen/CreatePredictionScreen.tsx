import { SafeAreaView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import CreatePredictionForm from "../../components/CreatePredictionForm/CreatePredictionForm";
import headingStyles from "../../styles/headings.styles";
import { useAppSelector } from "../../redux/hooks";
import matches from "../../utils/matches";
import { type PredictionStructure } from "../../redux/features/predictions/predictionsTypes";

const CreatePredictionScreen = (): JSX.Element => {
  const { predictions } = useAppSelector((state) => state.predictions);

  const matchesList = matches.filter(
    (match) =>
      !predictions.some((prediction) => prediction.match === match.value)
  );

  const emptyPrediction: PredictionStructure = {
    match: "",
    goalsTeam1: 0,
    goalsTeam2: 0,
    redCards: 0,
    yellowCards: 0,
    penalties: 0,
    picture: "",
    id: "",
    createdBy: "",
  };

  // Dispatch(loadOnePredictionActionCreator(emptyPrediction));

  return (
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle}>Create a new prediction</Text>
      <CreatePredictionForm
        matches={matchesList}
        currentPrediction={emptyPrediction}
      />
    </SafeAreaView>
  );
};

export default CreatePredictionScreen;
