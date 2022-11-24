import { renderHook } from "@testing-library/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import makeWrapper from "../../mocks/makeWrapper";
import useToken from "./useToken";
import { loggedInUserStateMock } from "../../mocks/userMocks";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { UserLoginData } from "../../redux/features/user/userTypes";
import { JwtCustomPayload } from "../../types/types";
import { store } from "../../redux/store";
import { mockInitialStoreSuccessModal } from "../../mocks/mockInitialStore";

const { token } = loggedInUserStateMock;

beforeEach(() => {
  jest.clearAllMocks();
});

const mockUser: UserLoginData = {
  username: "john",
  id: "id123",
  token: "token123",
};

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue("token123"),
  removeItem: jest.fn(),
}));

describe("Given the useToken custom hook", () => {
  describe("When it's method checkToken is invoked and there is a token in AsyncStorage", () => {
    test("Then getItem should be called with 'token'", () => {
      const {
        result: {
          current: { checkToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.getItem = jest.fn().mockReturnValue(token);

      checkToken();

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("token");
    });
  });

  describe("When it's method removeToken is invoked", () => {
    test("Then removeItem should be called with 'token'", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapper,
      });

      AsyncStorage.removeItem = jest.fn().mockReturnValue(token);

      removeToken();

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("token");
    });
  });
});
