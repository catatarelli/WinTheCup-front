import { ImageBackground, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import formStyles from "../../styles/form.styles";
import image from "../../../assets/background-image.webp";
import logo from "../../../assets/logo.png";

const LoginScreen = (): JSX.Element => (
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
