/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import image from "../../../assets/image.webp";
import logo from "../../../assets/logo.png";
import styles from "../RegisterScreen/RegisterScreenStyled";
import formStyles from "../../styles/form.styles";
import welcomeStyles from "./WelcomeScreenStyled";

const WelcomeScreen = () => (
  <ScrollView>
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
      testID="backgroudImage"
    >
      <SafeAreaView style={welcomeStyles.container}>
        <Image source={logo} style={welcomeStyles.logo} testID="logo" />
        <Text style={welcomeStyles.secondaryTitle}>WORLD CUP PREDICTOR</Text>
        <Text style={welcomeStyles.complementryTitle}>
          WHO'S YOUR CHAMPION?
        </Text>
        <TouchableOpacity style={welcomeStyles.button}>
          <Text style={formStyles.buttonText} testID="loginButton">
            Log in
          </Text>
        </TouchableOpacity>
        <View style={formStyles.loginContainer}>
          <Text style={formStyles.loginText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={formStyles.loginLink}>Join now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  </ScrollView>
);

export default WelcomeScreen;
