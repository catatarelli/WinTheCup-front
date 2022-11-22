import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import { registerDataMock } from "../../mocks/userMocks";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import type { RegisterData } from "../../types/userTypes";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

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
        modal: "Registered successfully! Please login",
        isError: false,
      };

      const newUser = registerDataMock;

      await registerUser(newUser);

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
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(actionPayload)
      );
    });
  });
});
