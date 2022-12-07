import React from "react";
import * as ImagePicker from "expo-image-picker";
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

describe("Given a CreatePredictionForm component", () => {
  describe("And the user presses the load image icon", () => {
    test("Then it should set the image form state", async () => {
      mockedImagePicker.launchImageLibraryAsync.mockResolvedValueOnce({
        canceled: false,
        assets: [{ uri: "abc.jpeg" }],
        type: "image",
      });

      renderWithProviders(
        <CreatePredictionForm
          matches={matchesMock}
          currentPrediction={prediction}
        />
      );

      const buttonId = "submitButton";
      const button = screen.getByTestId(buttonId);

      const pickImageButton = screen.getByTestId("image-picker");
      await fireEvent.press(pickImageButton);
      await fireEvent.press(button);

      expect(mockedImagePicker.launchImageLibraryAsync).toBeCalledTimes(1);
    });
  });
});
