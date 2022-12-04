/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { type ImagePickerResult } from "expo-image-picker";
import { screen, fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import CreatePredictionForm from "./CreatePredictionForm";
import { matchesMock } from "../../mocks/predictionsMocks";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockCreatePrediction = jest.fn();
const mockGetPredictions = jest.fn();
const mockUpdatePrediction = jest.fn();

jest.mock("../../hooks/usePredictions/usePredictions", () => () => ({
  createPrediction: mockCreatePrediction,
  getPredictions: mockGetPredictions,
  updatePrediction: mockUpdatePrediction,
}));

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn().mockResolvedValue({
    canceled: false,
    assets: [{ uri: "abc.jpeg" }],
    type: "image",
    width: "200",
    height: "200",
  }),
  MediaTypeOptions: jest.fn(),
}));

const mockedImagePicker = jest.mocked(ImagePicker);

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

const editPrediction = {
  match: "Argentina vs Mexico",
  goalsTeam1: 2,
  goalsTeam2: 2,
  redCards: 1,
  yellowCards: 1,
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
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const selectTitle = await screen.getByText(expectedText);

      expect(selectTitle).toBeDefined();
    });
  });

  describe("And the user clicks on the submit button", () => {
    test("Then it should call createPrediction with the information in the form", () => {
      const buttonId = "submitButton";
      const dropdownId = "dropdown";
      const input1Id = "goalsTeam1";
      const input2Id = "goalsTeam2";
      const input3Id = "redCards";
      const input4Id = "yellowCards";
      const input5Id = "penalties";

      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        assets: [{ uri: "abc" }],
        type: "image",
      });

      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const button = screen.getByTestId(buttonId);
      const dropdown = screen.getByTestId(dropdownId);
      const numericInput1 = screen.getByTestId(input1Id);
      const numericInput2 = screen.getByTestId(input2Id);
      const numericInput3 = screen.getByTestId(input3Id);
      const numericInput4 = screen.getByTestId(input4Id);
      const numericInput5 = screen.getByTestId(input5Id);
      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);
      fireEvent.changeText(dropdown, "Argentina vs Chile Nov 30");
      fireEvent.press(button);
      fireEvent.changeText(numericInput1, "1");
      fireEvent.changeText(numericInput2, "1");
      fireEvent.changeText(numericInput3, "1");
      fireEvent.changeText(numericInput4, "1");
      fireEvent.changeText(numericInput5, "1");

      expect(mockCreatePrediction).toHaveBeenCalled();
    });
  });

  describe("When it's rendered to update a prediction and the user clicks on the submit button", () => {
    test("Then it should call updatePrediction with the information in the form", async () => {
      const buttonId = "submitButton";

      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={editPrediction}
        />
      );

      const submitButton = await screen.getByTestId(buttonId);
      fireEvent.press(submitButton);

      expect(mockUpdatePrediction).toHaveBeenCalled();
    });
  });

  describe("And the user clicks on the load image icon", () => {
    test("Then it should set the image form state", async () => {
      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });

  describe("And the user clicks on the load image icon and the image doesn't have an extension", () => {
    test("Then it should set the image form state", async () => {
      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        canceled: false,
        assets: [{ uri: "abc" }],
        type: "image",
        name: "abc.jpg",
      });

      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });

  describe("And the user clicks on the load image icon and the image picker is cancelled", () => {
    test("Then it should set the image form state", async () => {
      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        canceled: true,
      } as ImagePickerResult);

      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const pickImageButton = screen.getByTestId("image-picker");

      fireEvent.press(pickImageButton);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });
});
