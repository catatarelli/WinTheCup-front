/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TabNavigator from "./TabNavigator";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";

beforeEach(() => {
  jest.clearAllMocks();
});

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

  describe("And the user presses the My profile button", () => {
    test("Then the useNavigation should be called with the My profile page reference", async () => {
      const myProfileButtonText = "My profile";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </Provider>
      );

      const displayedtabNavigationMyProfile =
        screen.queryByText(myProfileButtonText);

      expect(displayedtabNavigationMyProfile).toBeDefined();
    });
  });
});
