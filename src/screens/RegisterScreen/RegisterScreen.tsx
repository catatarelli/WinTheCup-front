/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageBackground, SafeAreaView, ScrollView, Image } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import React from "react";
import screenStyles from "../../styles/screen.styles";
import image from "../../../assets/background-image.webp";
import logo from "../../../assets/logo.png";
import formStyles from "../../styles/form.styles";

const RegisterScreen = () => (
  <ScrollView>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={screenStyles.image}
      testID="backgroudImage"
    >
      <SafeAreaView style={screenStyles.container}>
        <Image source={logo} style={formStyles.logoForm} testID="logo" />
        <RegisterForm />
      </SafeAreaView>
    </ImageBackground>
  </ScrollView>
);

export default RegisterScreen;
