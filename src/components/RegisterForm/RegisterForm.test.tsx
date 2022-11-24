/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import type { RegisterData } from "../../redux/features/user/userTypes";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title with text 'WIN THE CUP'", async () => {
      const expectedText = "WIN THE CUP";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("And the user fills in the form and presses the 'Register' button", () => {
    test("Then it should call the dispatcher", async () => {
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
          <RegisterForm />
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
});
