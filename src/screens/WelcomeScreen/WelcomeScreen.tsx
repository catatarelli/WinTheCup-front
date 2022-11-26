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
import screenStyles from "../../styles/screen.styles";
import formStyles from "../../styles/form.styles";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";

const WelcomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <ScrollView>
      <ImageBackground
        source={image}
        style={screenStyles.image}
        testID="backgroudImage"
      >
        <SafeAreaView style={screenStyles.container}>
          <Image source={logo} style={formStyles.logo} testID="logo" />
          <Text style={screenStyles.secondaryTitle}>WORLD CUP PREDICTOR</Text>
          <Text style={screenStyles.complementryTitle}>
            WHO'S YOUR CHAMPION?
          </Text>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => {
              navigation.navigate(Routes.login);
            }}
          >
            <Text style={formStyles.buttonText} testID="loginButton">
              Log in
            </Text>
          </TouchableOpacity>
          <View style={formStyles.loginContainer}>
            <Text style={formStyles.loginText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.register);
              }}
            >
              <Text style={formStyles.loginLink}>Join now</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

export default WelcomeScreen;
