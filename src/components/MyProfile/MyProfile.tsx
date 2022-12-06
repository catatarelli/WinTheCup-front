/* eslint-disable @typescript-eslint/no-floating-promises */
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logoutUserActionCreator } from "../../redux/features/user/userSlice";
import { resetPredictionsActionCreator } from "../../redux/features/predictions/predictionsSlice";
import { resetUiActionCreator } from "../../redux/features/ui/uiSlice";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";
import useToken from "../../hooks/useToken/useToken";
import styles from "./MyProfileStyled";
import useUser from "../../hooks/useUser/useUser";

const MyProfile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { removeToken } = useToken();
  const { editUser } = useUser();
  const { username, email } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    dispatch(resetPredictionsActionCreator());
    dispatch(resetUiActionCreator());
    navigation.navigate(Routes.login);
  };

  const initialFormData = {
    username,
    password: "",
    email,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  let newUser;

  const onSubmit = async () => {
    if (formData.password) {
      newUser = {
        username: formData.username,
        password: formData.password,
        email: formData.email,
      };
    } else {
      newUser = {
        username: formData.username,
        email: formData.email,
      };
    }

    await editUser(newUser);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={formData.username}
          onChangeText={(data) => {
            handleFormChange(data, "username");
          }}
          textContentType="username"
          testID="username"
          maxLength={20}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={formData.password}
          onChangeText={(data) => {
            handleFormChange(data, "password");
          }}
          textContentType="password"
          testID="password"
          maxLength={20}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(data) => {
            handleFormChange(data, "email");
          }}
          testID="email"
          maxLength={25}
          textContentType="emailAddress"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText} testID="saveChanges">
          Save changes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyProfile;
