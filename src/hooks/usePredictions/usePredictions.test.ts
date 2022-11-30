/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import { getRandomPrediction } from "../../mocks/predictionsFactory";
import {
  mockGetPredictionByIdResponse,
  mockgetPredictionsResponse,
  mockPredictionCreate,
  mockPredictionCreateRepeated,
} from "../../mocks/predictionsMocks";
import {
  loadOnePredictionActionCreator,
  loadPredictionsActionCreator,
} from "../../redux/features/predictions/predictionsSlice";
import type { CreatePredicitonStructure } from "../../redux/features/predictions/predictionsTypes";
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
          modal: "There was an error on the server",
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

      await getPredictionById(mockGetPredictionByIdResponse.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadOnePredictionActionCreator(mockGetPredictionByIdResponse)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When its method createPrediction is invoked with one game and the server responds with 400 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { createPrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      const newPrediction: CreatePredicitonStructure = getRandomPrediction();

      await createPrediction(newPrediction);

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
          modal: "Request failed with status code 400",
          isLoading: false,
        })
      );
    });
  });

  describe("When its method createPrediction is invoked with a prediction of a match that is already created", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { createPrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await createPrediction(mockPredictionCreateRepeated);

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
          modal: "Prediction already created",
          isLoading: false,
        })
      );
    });
  });

  describe("When its method createPrediction is invoked with a prediction", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { createPrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await createPrediction(mockPredictionCreate);

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
          isError: false,
          modal: "Prediction created successfully! Good luck",
          isLoading: false,
        })
      );
    });
  });
});

describe("Given the custom hook usePredictions", () => {
  describe("When its method deletePerdiction is invoked with predictionId '56789' and the server responds with 404 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { deletePrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await deletePrediction("1234");

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
          modal: "There was an error on the server",
          isError: true,
          isLoading: false,
        })
      );
    });
  });

  describe("When its method deletePrediction is invoked with predictionId '56789'", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { deletePrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await deletePrediction("1234");

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
          modal: "Prediction deleted",
          isError: false,
          isLoading: false,
        })
      );
    });
  });
});
