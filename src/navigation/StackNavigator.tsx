import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Routes from "./routes";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import MyPredictionsScreen from "../screens/MyPredictionsScreen/MyPredictionsScreen";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.welcome}>
        <Stack.Screen
          name={Routes.welcome}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.register}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.myPredictions}
          component={MyPredictionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorExplorer;
