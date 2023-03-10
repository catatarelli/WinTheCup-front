import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import LoginFrom from "./LoginForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import type { UserCredentials } from "../../redux/features/user/userTypes";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../../navigation/routes";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
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

describe("Given a LoginFrom component", () => {
  describe("When it's rendered and the user fills in the form and presses the 'Log in' button", () => {
    test("Then it should call the loginUser function", async () => {
      const usernameInputId = "username";
      const passwordInputId = "password";
      const buttonId = "submitButton";

      const mockUser: UserCredentials = {
        username: "pedro",
        password: "pedro123",
      };

      render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginFrom />
          </NavigationContainer>
        </Provider>
      );

      const usernameInput = await screen.getByTestId(usernameInputId);
      const passwordInput = await screen.getByTestId(passwordInputId);
      const button = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUser.username);
      fireEvent.changeText(passwordInput, mockUser.password);
      fireEvent.press(button);

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });

  describe("And the user presses the 'Join now' button", () => {
    test("Then the useNavigation should be called with the register page reference", async () => {
      const registerButtonText = "Join now";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginFrom />
          </NavigationContainer>
        </Provider>
      );

      const registerButton = await screen.getByText(registerButtonText);
      fireEvent(registerButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.register);
    });
  });
});
