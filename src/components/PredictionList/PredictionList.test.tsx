/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { fireEvent, screen, render } from "@testing-library/react-native";
import { getRandomPredictionsList } from "../../mocks/predictionsFactory";
import PredictionList from "./PredictionList";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { type PredictionStructure } from "../../redux/features/predictions/predictionsTypes";
import Routes from "../../navigation/routes";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";

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

  describe("When it is rendered with an empty list", () => {
    test("Then it should show the text 'You have no predictions yet' and a button with the text 'Start Playing'", () => {
      const predictions = [] as PredictionStructure[];
      const expectedText = "You have no predictions yet";
      const buttonId = "CreateButton";

      renderWithProviders(<PredictionList predictions={predictions} />);

      const displayedText = screen.queryByText(expectedText);
      const button = screen.queryByTestId(buttonId);

      expect(displayedText).toBeDefined();
      expect(button).toBeDefined();
    });

    test("And when the user presses on the button, the useNavigation should be called with the createPrediction page reference", async () => {
      const predictions = [] as PredictionStructure[];
      const buttonId = "CreateButton";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <PredictionList predictions={predictions} />
          </NavigationContainer>
        </Provider>
      );

      const button = screen.queryByTestId(buttonId);
      fireEvent(button, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(Routes.createPrediction);
    });
  });
});
