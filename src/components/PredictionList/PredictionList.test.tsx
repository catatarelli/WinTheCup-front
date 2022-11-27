import React from "react";
import { screen } from "@testing-library/react-native";
import { getRandomPredictionsList } from "../../mocks/predictionsFactory";
import PredictionList from "./PredictionList";
import { renderWithProviders } from "../../mocks/renderWithProviders";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a PredictionList component", () => {
  describe("When it is rendered with a list of 9 predictions", () => {
    test("Then it should show 9 prediction cards", () => {
      const predictions = getRandomPredictionsList(9);
      const predictionId = "predictionCard";

      renderWithProviders(<PredictionList predictions={predictions} />);

      const displayedCards = screen.queryAllByTestId(predictionId);
      expect(displayedCards).toHaveLength(9);
    });
  });
});
