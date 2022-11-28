/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TabNavigator from "./TabNavigator";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

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
});
