import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import type { RegisterData } from "../../redux/features/user/userTypes";
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

describe("Given a RegisterForm component", () => {
  describe("When it's rendered and the user fills in the form and presses the 'Join Now' button", () => {
    test("Then it should call the registerUser function", async () => {
      const usernameInputId = "username";
      const passwordInputId = "password";
      const emailInputId = "email";
      const buttonId = "submitButton";

      const mockUser: RegisterData = {
        username: "pedro",
        password: "pedro123",
        email: "pedro@gmail.com",
      };

      render(
        <Provider store={store}>
          <NavigationContainer>
            <RegisterForm />
          </NavigationContainer>
        </Provider>
      );

      const usernameInput = await screen.getByTestId(usernameInputId);
      const passwordInput = await screen.getByTestId(passwordInputId);
      const emailInput = await screen.getByTestId(emailInputId);
      const button = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUser.username);
      fireEvent.changeText(passwordInput, mockUser.password);
      fireEvent.changeText(emailInput, mockUser.email);
      fireEvent.press(button);

      expect(mockRegisterUser).toHaveBeenCalledWith(mockUser);
    });
  });

  describe("And when the user presses the 'Log in' button", () => {
    test("Then the useNavigation should be called with the login page reference", async () => {
      const loginButtonText = "Log in";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <RegisterForm />
          </NavigationContainer>
        </Provider>
      );

      const loginButton = await screen.getByText(loginButtonText);
      fireEvent(loginButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.login);
    });
  });
});
