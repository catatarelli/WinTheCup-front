/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, render } from "@testing-library/react-native";
import PredictionDetailScreen from "./PredictionDetailScreen";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a PredictionDetailScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'Prediction Detail' and a card with a prediction", async () => {
      const titleText = "Prediction Detail";
      const predictionId = "predictionDetail";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <PredictionDetailScreen />
          </NavigationContainer>
        </Provider>
      );

      const title = screen.queryByText(titleText);
      const prediction = screen.queryByTestId(predictionId);

      expect(title).toBeDefined();
      expect(prediction).toBeDefined();
    });

    test("Then it should match the snapshot", () => {
      const screen = render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <PredictionDetailScreen />
          </NavigationContainer>
        </Provider>
      );
      expect(screen).toMatchSnapshot();
    });
  });
});
