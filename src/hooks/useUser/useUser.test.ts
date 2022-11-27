import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import {
  mockGetPredictionByIdResponse,
  mockgetPredictionsResponse,
  registerDataMock,
} from "../../mocks/userMocks";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import {
  loadPredictionsActionCreator,
  loginUserActionCreator,
} from "../../redux/features/user/userSlice";
import { type RegisterData } from "../../redux/features/user/userTypes";
import { store } from "../../redux/store";
import useUser from "./useUser";

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

describe("Given the custom hook useUser", () => {
  describe("When it's method registerUser is invoked with username 'pepito123', email 'pepito@gmail.com' and password 'pepito123'", () => {
    test("Then dispatch should be called with openModalActionCreator with a success message ", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });
      const actionPayload = {
        modal: "Account created successfully",
        isError: false,
        isLoading: false,
      };

      await registerUser(registerDataMock);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'panchito123', email 'panchito@gmail.com' and passwords 'panchito1123' but the user is already registered in the database", () => {
    test("Then dispatch should be called with openModalActionCreator with an error message", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const newUser: RegisterData = {
        username: "panchito123",
        email: "panchito@gmail.com",
        password: "panchito123",
      };

      const actionPayload = {
        isError: true,
        modal: "User is already registered",
        isLoading: false,
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'user1234' and password 'user1234'", () => {
    test("Then it should call dispatch with a loginUserActionCreator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const user = {
        username: "user1234",
        password: "user1234",
      };

      const expectedUser = {
        username: "user1234",
        id: "23456asdgerts",
        token: "token",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(expectedUser)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'user123' and the wrong password 'testPassword'", () => {
    test("Then it should call dispatch with a openModalActionCreator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const user = {
        username: "user1234",
        password: "testPassword",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator({
          modal: "Wrong credentials",
          isError: true,
          isLoading: false,
        })
      );
    });
  });

  describe("When its method getPredictions is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with the error message", async () => {
      const {
        result: {
          current: { getPredictions },
        },
      } = renderHook(() => useUser(), {
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
      } = renderHook(() => useUser(), {
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
      } = renderHook(() => useUser(), {
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
      } = renderHook(() => useUser(), {
        wrapper: makeWrapper,
      });

      const { prediction } = mockGetPredictionByIdResponse;

      const receivedPrediction = await getPredictionById(prediction.id);

      expect(receivedPrediction).toBeDefined();
    });
  });
});
