import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Routes from "./src/navigation/routes";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
