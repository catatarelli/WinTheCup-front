/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import {
  mockGetPredictionByIdResponse,
  mockgetPredictionsResponse,
} from "../../mocks/predictionsMocks";
import { loadPredictionsActionCreator } from "../../redux/features/predictions/predictionsSlice";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { store } from "../../redux/store";
import usePredictions from "./usePredictions";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the custom hook usePredictions", () => {
  describe("When its method getPredictions is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with the error message", async () => {
      const {
        result: {
          current: { getPredictions },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await getPredictions();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modal: "There was an error on the server",
          isLoading: false,
        })
      );
    });
  });

  describe("When its method getPredictions is invoked", () => {
    test("Then dispatch should be called with loadPredictionsActionCreator and a list of predictions", async () => {
      const {
        result: {
          current: { getPredictions },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      const { predictions } = mockgetPredictionsResponse;

      await getPredictions();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadPredictionsActionCreator(predictions)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When its method getPredictionById is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with the error message", async () => {
      const {
        result: {
          current: { getPredictionById },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await getPredictionById("1234");

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modal: "Prediction not found",
          isLoading: false,
        })
      );
    });
  });

  describe("When its method getPredictionById is invoked with predictionId '56789'", () => {
    test("Then it should return the prediction with Id '56789'", async () => {
      const {
        result: {
          current: { getPredictionById },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      const { prediction } = mockGetPredictionByIdResponse;

      const receivedPrediction = await getPredictionById(prediction.id);

      expect(receivedPrediction).toBeDefined();
    });
  });
});
