import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import useUser from "../../hooks/useUser/useUser";
import type { RegisterData } from "../../redux/features/user/userTypes";
import formStyles from "../../styles/form.styles";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";

const RegisterForm = (): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

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
    <View style={formStyles.background}>
      <View>
        <Text style={formStyles.label}>Username</Text>
        <TextInput
          value={userData.username}
          style={formStyles.input}
          onChangeText={(data) => {
            changeUserData(data, "username");
          }}
          testID="username"
          maxLength={20}
          textContentType="username"
        />
      </View>
      <View>
        <Text style={formStyles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={userData.password}
          style={formStyles.input}
          onChangeText={(data) => {
            changeUserData(data, "password");
          }}
          testID="password"
          maxLength={20}
          textContentType="password"
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.login);
          }}
        >
          <Text style={formStyles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;
