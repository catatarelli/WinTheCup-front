/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageBackground, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "../RegisterScreen/RegisterScreenStyled";
import image from "../../../assets/background-image.webp";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginScreen = () => (
  <ScrollView>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
      testID="backgroudImage"
    >
      <SafeAreaView style={styles.container}>
        <LoginForm />
      </SafeAreaView>
    </ImageBackground>
  </ScrollView>
);

export default LoginScreen;
