import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import StackNavigatorExplorer from "./src/navigation/StackNavigator/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigatorExplorer />
    </NavigationContainer>
  </Provider>
);

export default App;
