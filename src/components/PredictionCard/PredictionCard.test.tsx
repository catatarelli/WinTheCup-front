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

const mockDeletePrediction = jest.fn();
const mockPredictionById = jest.fn();
const mockGetPrediction = jest.fn();

jest.mock("../../hooks/usePredictions/usePredictions", () => () => ({
  deletePrediction: mockDeletePrediction,
  getPredictionById: mockPredictionById,
  getPredictions: mockGetPrediction,
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
      const matchButtonId = "toDetail";

      renderWithProviders(<PredictionCard prediction={prediction} />);

      const matchButton = await screen.queryByTestId(matchButtonId);
      fireEvent(matchButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.predictionDetail);
    });
  });

  describe("And the user presses on the delete button", () => {
    test("Then it should call the deletePrediction function", async () => {
      const prediction = getRandomPrediction();
      const buttonId = "deleteButton";

      renderWithProviders(<PredictionCard prediction={prediction} />);

      const deleteButton = await screen.queryByTestId(buttonId);
      fireEvent(deleteButton, "press");

      expect(mockDeletePrediction).toHaveBeenCalledWith(prediction.id);
    });
  });
});
