import { renderHook } from "@testing-library/react";
import makeWrapper from "../../mocks/makeWrapper";
import { registerDataMock } from "../../mocks/userMocks";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the custom hook useUser", () => {
  describe("When it's method registerUser is invoked with username 'pepito123', email 'pepito@gmail.com' and password 'pepito123'", () => {
    test("Then dispatch should be called with openModalActionCreator", async () => {
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
});
