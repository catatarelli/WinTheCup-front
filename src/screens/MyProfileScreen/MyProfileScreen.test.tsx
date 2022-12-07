import React from "react";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";
import MyProfileScreen from "./MyProfileScreen";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a MyProfileScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'My Profile'", async () => {
      const titleText = "My Profile";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <MyProfileScreen />
          </NavigationContainer>
        </Provider>
      );

      const title = screen.queryByText(titleText);

      expect(title).toBeDefined();
    });

    test("Then it should match the snapshot", () => {
      const screen = render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <MyProfileScreen />
          </NavigationContainer>
        </Provider>
      );
      expect(screen).toMatchSnapshot();
    });
  });
});
