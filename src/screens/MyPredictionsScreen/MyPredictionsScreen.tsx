/* eslint-disable @typescript-eslint/no-floating-promises */
import { SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import screenStyles from "../../styles/screen.styles";
import PredictionList from "../../components/PredictionList/PredictionList";
import { useAppSelector } from "../../redux/hooks";
import usePredictions from "../../hooks/usePredictions/usePredictions";

const MyPredictionsScreen = (): JSX.Element => {
  const { getPredictions } = usePredictions();

  useEffect(() => {
    getPredictions();
  }, [getPredictions]);

  const { predictions } = useAppSelector((state) => state.predictions);

  return (
    <View style={screenStyles.screenBackground}>
      <SafeAreaView style={screenStyles.container}>
        <PredictionList predictions={predictions} />
      </SafeAreaView>
    </View>
  );
};

export default MyPredictionsScreen;
