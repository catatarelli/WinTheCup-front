import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RegisterScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
