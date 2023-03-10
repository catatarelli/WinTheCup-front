/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { renderHook } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import makeWrapper from "../../mocks/makeWrapper";
import useToken from "./useToken";
import { loggedInUserStateMock } from "../../mocks/userMocks";
import type { JwtCustomPayload } from "../../types/types";
import type { UserLoginData } from "../../redux/features/user/userTypes";
import { store } from "../../redux/store";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";

const { token } = loggedInUserStateMock;

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockUser: UserLoginData = {
  username: "admin",
  id: "testid",
  token: "testtoken",
};

jest.mock(
  "jwt-decode",
  () => () =>
    ({ id: mockUser.id, username: mockUser.username } as JwtCustomPayload)
);

jest.mock("../../utils/decodeToken", () => () => ({
  id: "testid",
  username: "admin",
}));

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the hook useToken", () => {
  describe("When it's method checkToken is invoked and there is a token in AsyncStorage", () => {
    test("Then getItem should be called with 'token'", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue(token);

      await checkToken();

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("token");
    });

    test("And then dispatch should be called with loginUserActionCreator and the user data", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue(token);

      await checkToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });

  describe("When its method checkToken is invoked and there is no token in AsyncStorage", () => {
    test("Then it should not call the dispatch", async () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue("");

      await checkToken();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  describe("When it's method removeToken is invoked", () => {
    test("Then removeItem should be called with 'token'", async () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.removeItem = jest.fn().mockReturnValue(token);

      await removeToken();

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("token");
    });
  });
});
