import { screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import { getRandomPrediction } from "../../mocks/predictionsFactory";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import Routes from "../../navigation/routes";
import PredictionDetail from "./PredictionDetail";

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

  describe("And the user presses on delete button", () => {
    test("Then the useNavigation should be called with the MyPredictions page reference", async () => {
      const prediction = getRandomPrediction();
      const buttonId = "deleteButton";

      renderWithProviders(<PredictionDetail prediction={prediction} />);

      const deleteButton = await screen.queryByTestId(buttonId);
      fireEvent(deleteButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.myPredictions);
    });
  });

  describe("And the user presses on the edit button", () => {
    test("Then the useNavigation should be called with the editPrediction page reference", async () => {
      const prediction = getRandomPrediction();
      const buttonId = "editButton";

      renderWithProviders(<PredictionDetail prediction={prediction} />);

      const editButton = await screen.queryByTestId(buttonId);
      fireEvent(editButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.editPrediction);
    });
  });
});
