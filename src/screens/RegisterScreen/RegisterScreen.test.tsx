import React from "react";
import { render, screen } from "@testing-library/react-native";
import RegisterScreen from "./RegisterScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a RegisterScreen component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image", async () => {
      const imageId = "backgroudImage";

      render(
        <Provider store={store}>
          <RegisterScreen />
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);

      expect(displayedImage).toBeDefined();
    });
  });
});
