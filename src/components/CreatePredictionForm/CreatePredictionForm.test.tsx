/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreatePredictionForm from "./CreatePredictionForm";
import matches from "../../utils/matches";

const mockCreatePrediction = jest.fn();

jest.mock("../../hooks/usePredictions/usePredictions", () => () => ({
  createPrediction: mockCreatePrediction,
}));

const prediction = {
  match: "",
  goalsTeam1: 0,
  goalsTeam2: 0,
  redCards: 0,
  yellowCards: 0,
  penalties: 0,
  picture: "",
  id: "",
  createdBy: "",
};

describe("Given a CreatePredictionForm component", () => {
  describe("When it's rendered with a current prediction", () => {
    test("Then it should show a select with text 'Select a match'", async () => {
      const expectedText = "Select a match";

      renderWithProviders(
        <CreatePredictionForm
          matches={matches}
          currentPrediction={prediction}
        />
      );

      const selectTitle = await screen.getByText(expectedText);

      expect(selectTitle).toBeDefined();
    });
  });

  describe("And the user clicks on the submit button", () => {
    test("Then it should call createPrediction with the information in the form", async () => {
      const buttonId = "submitButton";
      const dropdownId = "dropdown";

      renderWithProviders(
        <CreatePredictionForm
          matches={matches}
          currentPrediction={prediction}
        />
      );
      screen.debug();

      const button = await screen.getByTestId(buttonId);
      const dropdown = await screen.getByTestId(dropdownId);
      screen.getAllByDisplayValue("0");

      fireEvent.changeText(dropdown, "Argentina vs Chile Nov 30");
      fireEvent.press(button);

      expect(mockCreatePrediction).toHaveBeenCalled();
    });
  });
});
