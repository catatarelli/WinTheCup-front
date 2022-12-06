/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../../navigation/routes";
import MyProfile from "./MyProfile";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { type RegisterData } from "../../redux/features/user/userTypes";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockEditUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  editUser: mockEditUser,
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

describe("Given a MyProfile component", () => {
  describe("When it's rendered and the user fills in the form and presses the 'Save changes' button", () => {
    test("Then it should call the editUser function", async () => {
      const buttonId = "saveChanges";
      const usernameInputId = "username";
      const passwordInputId = "password";
      const emailInputId = "email";

      const mockUser: RegisterData = {
        username: "pedro",
        password: "pedro123",
        email: "pedro@gmail.com",
      };

      renderWithProviders(<MyProfile />);

      const usernameInput = await screen.getByTestId(usernameInputId);
      const passwordInput = await screen.getByTestId(passwordInputId);
      const emailInput = await screen.getByTestId(emailInputId);
      const button = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUser.username);
      fireEvent.changeText(passwordInput, mockUser.password);
      fireEvent.changeText(emailInput, mockUser.email);
      fireEvent.press(button);

      expect(mockEditUser).toHaveBeenCalled();
    });
  });

  describe("When it's rendered and the user fills in the form and presses the 'Save changes' button", () => {
    test("Then it should call the editUser function", async () => {
      const buttonId = "saveChanges";
      const usernameInputId = "username";
      const emailInputId = "email";

      const mockUser: RegisterData = {
        username: "pedro",
        password: "pedro123",
        email: "pedro@gmail.com",
      };

      renderWithProviders(<MyProfile />);

      const usernameInput = await screen.getByTestId(usernameInputId);
      const emailInput = await screen.getByTestId(emailInputId);
      const button = await screen.getByTestId(buttonId);

      fireEvent.changeText(usernameInput, mockUser.username);
      fireEvent.changeText(emailInput, mockUser.email);
      fireEvent.press(button);

      expect(mockEditUser).toHaveBeenCalled();
    });
  });

  describe("And when the user presses the 'Log out' button", () => {
    test("Then the useNavigation should be called with the login page reference", async () => {
      const logoutButtonText = "Log out";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <MyProfile />
          </NavigationContainer>
        </Provider>
      );

      const logoutButton = await screen.getByText(logoutButtonText);
      fireEvent(logoutButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.login);
    });
  });
});
