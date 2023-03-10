/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import useUser from "../../hooks/useUser/useUser";
import type { UserCredentials } from "../../redux/features/user/userTypes";
import formStyles from "../../styles/form.styles";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";
import loginStyles from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const initialUser: UserCredentials = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(
      userData.username.length < 5 || userData.password.length < 7
    );
  }, [userData.username, userData.password]);

  const { loginUser } = useUser();

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };

  const onSubmit = async () => {
    const newUser = {
      username: userData.username,
      password: userData.password,
    };
    await loginUser(newUser);
  };

  return (
    <View style={loginStyles.background}>
      <View>
        <Text style={formStyles.label}>Username</Text>
        <TextInput
          value={userData.username}
          testID="username"
          maxLength={20}
          textContentType="username"
          style={formStyles.input}
          onChangeText={(data) => {
            changeUserData(data, "username");
          }}
        />
      </View>
      <View>
        <Text style={formStyles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={userData.password}
          testID="password"
          maxLength={20}
          textContentType="password"
          style={formStyles.input}
          onChangeText={(data) => {
            changeUserData(data, "password");
          }}
        />
      </View>
      <TouchableOpacity
        style={buttonDisabled ? loginStyles.buttonDisabled : loginStyles.button}
      >
        <Text
          style={formStyles.buttonText}
          onPress={onSubmit}
          testID="submitButton"
        >
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
    </View>
  );
};

export default LoginForm;
