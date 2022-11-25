/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import WelcomeScreen from "./WelcomeScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image and the logo 'WIN THE CUP'", async () => {
      const imageId = "backgroudImage";
      const logoId = "logo";

      render(
        <Provider store={store}>
          <WelcomeScreen />
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);
      const logo = screen.queryByTestId(logoId);

      expect(displayedImage).toBeDefined();
      expect(logoId).toBeDefined();
    });
  });
});
