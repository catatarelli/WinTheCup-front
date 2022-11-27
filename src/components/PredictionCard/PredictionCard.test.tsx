/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { getRandomPrediction } from "../../mocks/predictionsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import Routes from "../../navigation/routes";
import PredictionCard from "./PredictionCard";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Given a PredictionCard component", () => {
  describe("When it's rendered with a prediction", () => {
    test("Then it should show the image and the match received", async () => {
      const prediction = getRandomPrediction();
      const imageId = "predictionPicture";

      renderWithProviders(<PredictionCard prediction={prediction} />);

      const displayedImage = screen.queryByTestId(imageId);
      const displayedMatch = screen.queryByText(prediction.match);

      expect(displayedImage).toBeDefined();
      expect(displayedMatch).toBeDefined();
    });
  });

  describe("And the user presses on the match text", () => {
    test("Then the useNavigation should be called with the detail page reference", async () => {
      const prediction = getRandomPrediction();
      const matchButtonId = "match";

      renderWithProviders(<PredictionCard prediction={prediction} />);

      const matchButton = await screen.queryByTestId(matchButtonId);
      fireEvent(matchButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.predictionDetail);
    });
  });
});
