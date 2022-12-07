/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import CreatePredictionScreen from "./CreatePredictionScreen";
import { NavigationContainer } from "@react-navigation/native";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a CreatePreditionScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'Create a new prediction'", async () => {
      const titleText = "Create a new prediction";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <CreatePredictionScreen />
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
            <CreatePredictionScreen />
          </NavigationContainer>
        </Provider>
      );
      expect(screen).toMatchSnapshot();
    });
  });
});
