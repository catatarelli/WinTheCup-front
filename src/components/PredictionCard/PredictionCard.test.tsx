/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, screen } from "@testing-library/react-native";
import React from "react";
import { getRandomPrediction } from "../../mocks/predictionsFactory";
import PredictionCard from "./PredictionCard";

describe("Given a PredictionCard component", () => {
  describe("When it's rendered with a prediction", () => {
    test("Then it should show the image and the match received", async () => {
      const prediction = getRandomPrediction();
      const imageId = "predictionPicture";

      render(<PredictionCard prediction={prediction} />);

      const displayedImage = screen.queryByTestId(imageId);
      const displayedMatch = screen.queryByText(prediction.match);

      expect(displayedImage).toBeDefined();
      expect(displayedMatch).toBeDefined();
    });
  });
});
