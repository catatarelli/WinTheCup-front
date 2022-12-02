import { SafeAreaView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import CreatePredictionForm from "../../components/CreatePredictionForm/CreatePredictionForm";
import headingStyles from "../../styles/headings.styles";
import { useAppSelector } from "../../redux/hooks";
import matches from "../../utils/matches";

const CreatePredictionScreen = (): JSX.Element => {
  const { predictions } = useAppSelector((state) => state.predictions);

  const matchesList = matches.filter(
    (match) =>
      !predictions.some((prediction) => prediction.match === match.value)
  );

  return (
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle}>Create a new prediction</Text>
      <CreatePredictionForm matches={matchesList} />
    </SafeAreaView>
  );
};

export default CreatePredictionScreen;
