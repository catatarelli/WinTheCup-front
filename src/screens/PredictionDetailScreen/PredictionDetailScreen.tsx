import { SafeAreaView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";

import headingStyles from "../../styles/headings.styles";
import PredictionDetail from "../../components/PredictionDetail/PredictionDetail";
import { getRandomPrediction } from "../../mocks/predictionsFactory";

const prediction = getRandomPrediction();

const PredictionDetailScreen = (): JSX.Element => (
  <SafeAreaView style={screenStyles.container}>
    <Text style={headingStyles.pageTitle}>Prediction Detail</Text>
    <PredictionDetail prediction={prediction} />
  </SafeAreaView>
);

export default PredictionDetailScreen;
