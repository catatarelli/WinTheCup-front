/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import WelcomeScreen from "./WelcomeScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../../navigation/routes";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Given a WelcomeScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image and the logo 'WIN THE CUP'", async () => {
      const imageId = "backgroudImage";
      const logoId = "logo";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <WelcomeScreen />
          </NavigationContainer>
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);
      const logo = screen.queryByTestId(logoId);

      expect(displayedImage).toBeDefined();
      expect(logo).toBeDefined();
    });
  });

  describe("And the user presses the 'Log in' button", () => {
    test("Then the useNavigation should be called with the login page reference", async () => {
      const loginButtonText = "Log in";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <WelcomeScreen />
          </NavigationContainer>
        </Provider>
      );

      const loginButton = await screen.getByText(loginButtonText);
      fireEvent(loginButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.login);
    });
  });

  describe("And the user presses the 'Join now' button", () => {
    test("Then the useNavigation should be called with the register page reference", async () => {
      const registerButtonText = "Join now";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <WelcomeScreen />
          </NavigationContainer>
        </Provider>
      );

      const registerButton = await screen.getByText(registerButtonText);
      fireEvent(registerButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.register);
    });
  });

  test("Then it should match the snapshot", () => {
    const screen = render(
      <Provider store={store}>
        <NavigationContainer>
          <WelcomeScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
