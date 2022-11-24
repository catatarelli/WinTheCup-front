import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import routes from "./routes";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.welcome} component={WelcomeScreen} />
      <Stack.Screen name={routes.register} component={RegisterScreen} />
      <Stack.Screen name={routes.login} component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default StackNavigator;
