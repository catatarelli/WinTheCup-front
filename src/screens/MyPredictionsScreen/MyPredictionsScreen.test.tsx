/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, render } from "@testing-library/react-native";
import MyPredictionsScreen from "./MyPredictionsScreen";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a MyPredictionsScreen", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'My Predictions' and a list of predictions", () => {
      const expectedText = "My Predictions";
      const predictionId = "predictionCard";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <MyPredictionsScreen />
          </NavigationContainer>
        </Provider>
      );

      const renderedText = screen.queryByText(expectedText);
      const renderedPredictions = screen.queryAllByTestId(predictionId);

      expect(renderedText).toBeDefined();
      expect(renderedPredictions).toHaveLength(10);
    });

    test("Then it should match the snapshot", () => {
      const screen = render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <MyPredictionsScreen />
          </NavigationContainer>
        </Provider>
      );
      expect(screen).toMatchSnapshot();
    });
  });
});
