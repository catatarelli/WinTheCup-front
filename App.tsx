import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
