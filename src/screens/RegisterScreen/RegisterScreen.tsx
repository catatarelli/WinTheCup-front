/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ImageBackground, SafeAreaView, ScrollView } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import React from "react";
import styles from "./RegisterScreenStyled";
import image from "../../../assets/background-image.webp";

const RegisterScreen = () => (
  <ScrollView>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
      testID="backgroudImage"
    >
      <SafeAreaView style={styles.container}>
        <RegisterForm />
      </SafeAreaView>
    </ImageBackground>
  </ScrollView>
);

export default RegisterScreen;
