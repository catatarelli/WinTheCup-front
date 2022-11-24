/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import useUser from "../../hooks/useUser/useUser";
import type { UserCredentials } from "../../redux/features/user/userTypes";
import CustomModal from "../CustomModal/CustomModal";
import styles from "../RegisterForm/RegisterFormStyled";

const LoginForm = (): JSX.Element => {
  const initialUser: UserCredentials = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

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
    <>
      <CustomModal />
      <View>
        <Text style={styles.title}>WIN THE CUP</Text>
      </View>
      <View style={styles.background}>
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={userData.username}
            testID="username"
            maxLength={20}
            textContentType="username"
            style={styles.input}
            onChangeText={(data) => {
              changeUserData(data, "username");
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            value={userData.password}
            testID="password"
            maxLength={20}
            textContentType="password"
            style={styles.input}
            onChangeText={(data) => {
              changeUserData(data, "password");
            }}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={onSubmit}
            testID="submitButton"
          >
            Log in
          </Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account?</Text>
          <Text style={styles.loginLink}>Join now</Text>
        </View>
      </View>
    </>
  );
};

export default LoginForm;
