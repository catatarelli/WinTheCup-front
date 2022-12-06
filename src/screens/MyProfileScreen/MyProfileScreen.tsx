import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";

import headingStyles from "../../styles/headings.styles";
import MyProfile from "../../components/MyProfile/MyProfile";

const MyProfileScreen = (): JSX.Element => (
  <ScrollView style={screenStyles.screenBackground}>
    <SafeAreaView style={screenStyles.container}>
      <Text style={headingStyles.pageTitle}>My Profile</Text>
      <MyProfile />
    </SafeAreaView>
  </ScrollView>
);

export default MyProfileScreen;
