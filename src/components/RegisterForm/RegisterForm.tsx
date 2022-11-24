/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import useUser from "../../hooks/useUser/useUser";
import type { RegisterData } from "../../redux/features/user/userTypes";
import CustomModal from "../CustomModal/CustomModal";
import formStyles from "../../styles/form.styles";

const RegisterForm = (): JSX.Element => {
  const initialUser: RegisterData = {
    username: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(
      userData.username.length < 5 ||
        userData.email.length < 7 ||
        userData.password.length < 7
    );
  }, [userData.username, userData.email, userData.password]);

  const { registerUser } = useUser();

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };

  const onSubmit = async () => {
    const newUser = {
      username: userData.username,
      email: userData.email.toLowerCase(),
      password: userData.password,
    };
    await registerUser(newUser);
  };

  return (
    <>
      <CustomModal />
      <View>
        <Text style={formStyles.title}>WIN THE CUP</Text>
      </View>
      <View style={formStyles.background}>
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
        <View>
          <Text style={formStyles.label}>Email</Text>
          <TextInput
            accessibilityLabel="email"
            value={userData.email}
            testID="email"
            maxLength={25}
            textContentType="emailAddress"
            style={formStyles.input}
            onChangeText={(data) => {
              changeUserData(data, "email");
            }}
          />
        </View>

        <TouchableOpacity
          disabled={buttonDisabled}
          style={buttonDisabled ? formStyles.buttonDisabled : formStyles.button}
        >
          <Text
            style={formStyles.buttonText}
            onPress={onSubmit}
            testID="submitButton"
          >
            Join Now
          </Text>
        </TouchableOpacity>
        <View style={formStyles.loginContainer}>
          <Text style={formStyles.loginText}>Have an account?</Text>
          <Text style={formStyles.loginLink}>Log in</Text>
        </View>
      </View>
    </>
  );
};

export default RegisterForm;
