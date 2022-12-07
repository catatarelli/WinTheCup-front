/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image", async () => {
      const imageId = "backgroudImage";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginScreen />
          </NavigationContainer>
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);

      expect(displayedImage).toBeDefined();
    });

    test("Then it should match the snapshot", () => {
      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginScreen />
          </NavigationContainer>
        </Provider>
      );
      expect(screen).toMatchSnapshot();
    });
  });
});
