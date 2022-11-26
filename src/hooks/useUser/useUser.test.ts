import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import { registerDataMock } from "../../mocks/userMocks";
import { openModalActionCreator } from "../../redux/features/ui/uiSlice";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
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
});
