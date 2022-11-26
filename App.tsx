import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import StackNavigatorExplorer from "./src/navigation/StackNavigator";

const App = () => (
  <Provider store={store}>
    <StackNavigatorExplorer />
  </Provider>
);

export default App;
