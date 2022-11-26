/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  mockInitialStoreErrorModal,
  mockInitialStoreSuccessModal,
} from "../../mocks/mockInitialStore";
import { render, screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import CustomModal from "./CustomModal";
import { Provider } from "react-redux";
import { closeModalActionCreator } from "../../redux/features/ui/uiSlice";

const dispatchSpy = jest.spyOn(mockInitialStoreSuccessModal, "dispatch");

describe("Given a CustomModal component", () => {
  describe("When it's rendered and the success message 'Account created successfully' is loaded in the store", () => {
    test("Then it should show the text that is loaded in the store", async () => {
      const expectedText = "Account created successfully";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <CustomModal />
        </Provider>
      );

      const modalText = await screen.getByText(expectedText);

      expect(modalText).toBeDefined();
    });
  });

  describe("When the user presses the close button", () => {
    test("Then it should call dispatch with closeModalActionCreator", async () => {
      const buttonId = "closeButton";

      render(
        <Provider store={mockInitialStoreSuccessModal}>
          <CustomModal />
        </Provider>
      );

      const button = await screen.getByTestId(buttonId);
      fireEvent.press(button);

      expect(dispatchSpy).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });

  describe("When it's rendered and the error message 'User is already registered' is loaded in the store", () => {
    test("Then it should show the text that is loaded in the store", async () => {
      const expectedText = "User is already registered";

      render(
        <Provider store={mockInitialStoreErrorModal}>
          <CustomModal />
        </Provider>
      );

      const modalText = await screen.getByText(expectedText);

      expect(modalText).toBeDefined();
    });
  });
});
