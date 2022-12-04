import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import CreatePredictionForm from "../../components/CreatePredictionForm/CreatePredictionForm";
import headingStyles from "../../styles/headings.styles";
import { useAppSelector } from "../../redux/hooks";
import { createMatchesList, matches } from "../../utils/matches";

const EditPredictionScreen = (): JSX.Element => {
  const { predictions, currentPrediction } = useAppSelector(
    (state) => state.predictions
  );

  const matchesList = createMatchesList(matches);

  const newList = matchesList.filter(
    (match) =>
      !predictions.some((prediction) => prediction.match === match.value)
  );

  return (
    <ScrollView style={screenStyles.screenBackground}>
      <SafeAreaView style={screenStyles.container}>
        <Text style={headingStyles.pageTitle} testID="Edit prediction">
          Edit prediction
        </Text>
        <CreatePredictionForm
          matches={newList}
          currentPrediction={currentPrediction}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default EditPredictionScreen;
