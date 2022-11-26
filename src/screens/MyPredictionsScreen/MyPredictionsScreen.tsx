import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import screenStyles from "../../styles/screen.styles";
import PredictionList from "../../components/PredictionList/PredictionList";
import headingStyles from "../../styles/headings.styles";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../redux/hooks";

const MyPredictionsScreen = (): JSX.Element => {
  const { getPredictions } = useUser();

  useEffect(() => {
    getPredictions();
  }, [getPredictions]);

  const predictions = useAppSelector(({ user }) => user.predictions);

  return (
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle}>My Predictions</Text>
      <PredictionList predictions={predictions} />
    </SafeAreaView>
  );
};

export default MyPredictionsScreen;
