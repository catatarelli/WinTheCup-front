/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { screen } from "@testing-library/react-native";
import React from "react";
import { getRandomPrediction } from "../../mocks/predictionsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import PredictionDetail from "./PredictionDetail";

describe("Given a PredictionDetail component", () => {
  describe("When it's rendered with a prediction", () => {
    test("Then it should show the image and the match received", async () => {
      const prediction = getRandomPrediction();
      const imageId = "predictionPicture";

      renderWithProviders(<PredictionDetail prediction={prediction} />);

      const displayedImage = screen.queryByTestId(imageId);
      const displayedMatch = screen.queryByText(prediction.match);

      expect(displayedImage).toBeDefined();
      expect(displayedMatch).toBeDefined();
    });
  });
});
