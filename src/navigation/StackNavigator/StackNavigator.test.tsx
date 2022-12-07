import React from "react";
import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import StackNavigatorExplorer from "./StackNavigator";
import { mockUiStateSuccessModal } from "../../mocks/uiMocks";
import { loggedInUserStateMock } from "../../mocks/userMocks";
import { mockPredictionsState } from "../../mocks/predictionsMocks";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a StackNavigator componenet", () => {
  describe("When it's rendered", () => {
    test("Then it should show the welcome screen with a background image and the logo 'WIN THE CUP'", async () => {
      const imageId = "backgroundImage";
      const logoId = "logo";

      renderWithProviders(<StackNavigatorExplorer />);

      const displayedImage = screen.queryByTestId(imageId);
      const logo = await screen.queryByTestId(logoId);

      expect(displayedImage).toBeDefined();
      expect(logo).toBeDefined();
    });

    test("And if there is a modal with text 'test modal' in the store, it should show the modal", async () => {
      const modalText = "test modal";

      renderWithProviders(<StackNavigatorExplorer />, {
        preloadedState: {
          ui: {
            ...mockUiStateSuccessModal,
            modal: "test modal",
          },
          user: loggedInUserStateMock,
          predictions: mockPredictionsState,
        },
      });

      const displayedModalText = screen.queryByText(modalText);

      expect(displayedModalText).toBeDefined();
    });

    test("And if isLoading is set to true in the store, it should show the Loading component", async () => {
      const loadingId = "Loading";

      renderWithProviders(<StackNavigatorExplorer />, {
        preloadedState: {
          ui: {
            ...mockUiStateSuccessModal,
            isLoading: true,
          },
          user: loggedInUserStateMock,
          predictions: mockPredictionsState,
        },
      });

      const loading = screen.queryByTestId(loadingId);

      expect(loading).toBeDefined();
    });
  });
});
