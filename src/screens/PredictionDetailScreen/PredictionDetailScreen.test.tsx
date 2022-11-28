/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, render } from "@testing-library/react-native";
import PredictionDetailScreen from "./PredictionDetailScreen";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";

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
          <PredictionDetailScreen />
        </Provider>
      );

      const title = screen.queryByText(titleText);
      const prediction = screen.queryByTestId(predictionId);

      expect(title).toBeDefined();
      expect(prediction).toBeDefined();
    });
  });
});