/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TabNavigator from "./TabNavigator";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "../routes";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
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

describe("Given a TabNavigator component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a navigation bar with the text 'My predictions'", () => {
      const tabNavigationMyPredictions = "My predictions";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </Provider>
      );

      const displayedtabNavigationMyPredictions = screen.queryByText(
        tabNavigationMyPredictions
      );

      expect(displayedtabNavigationMyPredictions).toBeDefined();
    });
  });

  describe("And the user presses the logout button", () => {
    test("Then the useNavigation should be called with the Login page reference", async () => {
      const logoutButtonText = "Log out";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </Provider>
      );

      const logoutButton = await screen.queryByText(logoutButtonText);
      fireEvent(logoutButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.login);
    });
  });
});
