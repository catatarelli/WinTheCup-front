import React from "react";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";

export default function App() {
  return (
    <Provider store={store}>
      <RegisterScreen />
    </Provider>
  );
}
