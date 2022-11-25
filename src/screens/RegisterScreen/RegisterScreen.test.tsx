/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import RegisterScreen from "./RegisterScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image", async () => {
      const imageId = "backgroudImage";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <RegisterScreen />
          </NavigationContainer>
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);

      expect(displayedImage).toBeDefined();
    });
  });
});
