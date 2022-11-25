import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Routes from "./Routes";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.welcome}>
        <Stack.Screen name={Routes.welcome} component={WelcomeScreen} />
        <Stack.Screen name={Routes.register} component={RegisterScreen} />
        <Stack.Screen name={Routes.login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorExplorer;
