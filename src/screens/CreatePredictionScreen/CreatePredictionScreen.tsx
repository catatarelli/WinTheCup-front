import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import CreatePredictionForm from "../../components/CreatePredictionForm/CreatePredictionForm";
import headingStyles from "../../styles/headings.styles";

const CreatePredictionScreen = (): JSX.Element => (
  <ScrollView>
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle}>Create a new prediction</Text>
      <CreatePredictionForm />
    </SafeAreaView>
  </ScrollView>
);

export default CreatePredictionScreen;
