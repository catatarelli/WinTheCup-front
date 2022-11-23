import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import useUser from "../../hooks/useUser/useUser";
import type { RegisterData } from "../../types/userTypes";
import styles from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const initialUser: RegisterData = {
    username: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { registerUser } = useUser();

  const changeUserData = (text: string, identify: string) => {
    setUserData({
      ...userData,
      [identify]: text,
    });
  };

  useEffect(() => {
    setButtonDisabled(
      userData.username === "" ||
        userData.email === "" ||
        userData.password.length < 7
    );
  }, [userData.username, userData.email, userData.password]);

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
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            accessibilityLabel="email"
            value={userData.email}
            testID="email"
            maxLength={25}
            textContentType="emailAddress"
            style={styles.input}
            onChangeText={(data) => {
              changeUserData(data, "email");
            }}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={onSubmit}>
            Join Now
          </Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account?</Text>
          <Text style={styles.loginLink}>Log in</Text>
        </View>
      </View>
    </>
  );
};

export default RegisterForm;