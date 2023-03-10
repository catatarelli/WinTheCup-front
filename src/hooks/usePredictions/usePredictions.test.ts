import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import {
  mockGetPredictionByIdResponse,
  mockgetPredictionsResponse,
  mockPredictionCreate,
  mockPredictionCreateRepeated,
} from "../../mocks/predictionsMocks";
import {
  loadMorePredictionsActionCreator,
  loadOnePredictionActionCreator,
  loadPredictionsActionCreator,
} from "../../redux/features/predictions/predictionsSlice";
import {
  hideLoadingActionCreator,
  loadPagesActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { store } from "../../redux/store";
import usePredictions from "./usePredictions";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("../../utils/decodeToken", () => () => ({
  id: "23456asdgerts",
  username: "user1234",
}));

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
          modal: "There was an error loading your predictions",
        })
      );
    });
  });

  describe("When its method getPredictions is invoked with current page 0", () => {
    test("Then dispatch should be called with loadPredictionsActionCreator with a list of predictions", async () => {
      const {
        result: {
          current: { getPredictions },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      const { predictions, totalPages } = mockgetPredictionsResponse;

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
        loadPagesActionCreator({ totalPages, currentPage: 0 })
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        4,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When its method getPredictions is invoked with current page 1", () => {
    test("Then dispatch should be called with loadMorePredictionsActionCreator with a list of predictions", async () => {
      const {
        result: {
          current: { getPredictions },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      const { predictions, totalPages } = mockgetPredictionsResponse;

      await getPredictions(1);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadMorePredictionsActionCreator(predictions)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        loadPagesActionCreator({ totalPages, currentPage: 1 })
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        4,
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
          modal: "There was an error loading your prediction",
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
          modal: "There was an error creating the prediction",
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
        })
      );
    });
  });

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
        4,
        openModalActionCreator({
          modal: "Prediction deleted",
          isError: false,
        })
      );
    });
  });

  describe("When its method updatePrediction is invoked with predictionId '56789' and new data and the server responds with 404 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { updatePrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await updatePrediction(
        mockGetPredictionByIdResponse,
        mockGetPredictionByIdResponse.id
      );

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
          modal: "There was an error updating the prediction",
        })
      );
    });
  });

  describe("When its method updatePrediction is invoked with predictionId '56789' and new data and the server responds with 200 status", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { updatePrediction },
        },
      } = renderHook(() => usePredictions(), {
        wrapper: makeWrapper,
      });

      await updatePrediction(
        mockGetPredictionByIdResponse,
        mockGetPredictionByIdResponse.id
      );

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
          modal: "Prediction updated successfully",
        })
      );
    });
  });
});
