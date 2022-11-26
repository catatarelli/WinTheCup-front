import React from "react";
import { render, screen } from "@testing-library/react-native";
import { getRandomPredictionsList } from "../../mocks/predictionsFactory";
import PredictionList from "./PredictionList";

describe("Given a PredictionList component", () => {
  describe("When it is rendered with a list of 9 predictions", () => {
    test("Then it should show 9 prediction cards", () => {
      const predictions = getRandomPredictionsList(9);
      const predictionId = "predictionCard";

      render(<PredictionList predictions={predictions} />);

      const displayedCards = screen.queryAllByTestId(predictionId);
      expect(displayedCards).toHaveLength(9);
    });
  });
});
