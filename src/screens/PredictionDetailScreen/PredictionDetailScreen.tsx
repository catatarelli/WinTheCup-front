import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";

import headingStyles from "../../styles/headings.styles";
import PredictionDetail from "../../components/PredictionDetail/PredictionDetail";
import { useAppSelector } from "../../redux/hooks";

const PredictionDetailScreen = (): JSX.Element => {
  const { currentPrediction } = useAppSelector((state) => state.predictions);

  return (
    <ScrollView style={screenStyles.screenBackground}>
      <SafeAreaView style={screenStyles.container}>
        <Text style={headingStyles.pageTitle}>Prediction Detail</Text>
        <PredictionDetail prediction={currentPrediction} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PredictionDetailScreen;
