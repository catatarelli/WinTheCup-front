/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";
import { NavigationContainer } from "@react-navigation/native";
import EditPredictionScreen from "./EditPredictionScreen";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a EditPredictionScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'Edit prediction'", async () => {
      const titleId = "Edit prediction";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <NavigationContainer>
            <EditPredictionScreen />
          </NavigationContainer>
        </Provider>
      );

      const title = screen.queryByTestId(titleId);

      expect(title).toBeDefined();
    });
  });
});
