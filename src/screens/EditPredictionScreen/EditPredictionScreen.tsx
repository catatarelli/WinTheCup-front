import { SafeAreaView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import CreatePredictionForm from "../../components/CreatePredictionForm/CreatePredictionForm";
import headingStyles from "../../styles/headings.styles";
import { useAppSelector } from "../../redux/hooks";
import matches from "../../utils/matches";

const EditPredictionScreen = (): JSX.Element => {
  const { predictions, currentPrediction } = useAppSelector(
    (state) => state.predictions
  );

  const matchesList = matches.filter(
    (match) =>
      !predictions.some((prediction) => prediction.match === match.value)
  );

  return (
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle} testID="Edit prediction">
        Edit prediction
      </Text>
      <CreatePredictionForm
        matches={matchesList}
        currentPrediction={currentPrediction}
      />
    </SafeAreaView>
  );
};

export default EditPredictionScreen;
