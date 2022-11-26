/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageBackground, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import image from "../../../assets/background-image.webp";
import logo from "../../../assets/logo.png";
import LoginForm from "../../components/LoginForm/LoginForm";
import formStyles from "../../styles/form.styles";

const LoginScreen = () => (
  <ScrollView>
    <ImageBackground
      source={image}
      style={screenStyles.image}
      testID="backgroudImage"
    >
      <SafeAreaView style={screenStyles.container}>
        <Image source={logo} style={formStyles.logoForm} testID="logo" />
        <LoginForm />
      </SafeAreaView>
    </ImageBackground>
  </ScrollView>
);

export default LoginScreen;
