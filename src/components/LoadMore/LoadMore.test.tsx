/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import { goToNextPageActionCreator } from "../../redux/features/ui/uiSlice";
import { store } from "../../redux/store";
import LoadMore from "./LoadMore";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a LoadMore component", () => {
  describe("When it's rendered and the user presses on the button", () => {
    test("Then it should show a button with text 'Load more' and call dispatch", () => {
      const buttonText = "Load more";

      renderWithProviders(<LoadMore />, { store });

      const button = screen.queryByText(buttonText);
      fireEvent.press(button);

      expect(dispatchSpy).toHaveBeenCalledWith(goToNextPageActionCreator());
    });
  });
});
