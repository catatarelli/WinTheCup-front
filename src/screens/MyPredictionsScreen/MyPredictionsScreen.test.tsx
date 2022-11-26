/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { emptyModalMock } from "../../mocks/uiMocks";
import { mockUserWithPredictions } from "../../mocks/userMocks";
import MyPredictionsScreen from "./MyPredictionsScreen";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a MyPredictionsScreen", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'My Predictions' and a list of predictions", () => {
      const expectedText = "My Predictions";
      const predictionId = "predictionCard";

      renderWithProviders(<MyPredictionsScreen />, {
        preloadedState: {
          ui: emptyModalMock,
          user: mockUserWithPredictions,
        },
      });

      const renderedText = screen.queryByText(expectedText);
      const renderedPredictions = screen.queryAllByTestId(predictionId);

      expect(renderedText).toBeDefined();
      expect(renderedPredictions).toHaveLength(5);
    });
  });
});
