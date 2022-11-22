import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const makeWrapper = ({ children }: { children: JSX.Element }) => (
  <Provider store={store}>{children}</Provider>
);

export default makeWrapper;
