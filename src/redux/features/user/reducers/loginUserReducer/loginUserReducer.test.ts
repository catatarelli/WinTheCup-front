import { userMock } from "../../../../../mocks/userMocks";
import type { UserState } from "../../userTypes";
import loginUserReducer from "./loginUserReducer";

describe("Given a loginUserReducer", () => {
  describe("When it recieves an initial state and a payload with username: 'luis123'", () => {
    test("Then it should return a new state with the user data and its the property isLogged changed to true", () => {
      const currentUserState = userMock;

      const expectedUserState: UserState = { ...userMock, isLogged: true };

      const newUserState = loginUserReducer(currentUserState, {
        payload: userMock,
        type: "loginUser",
      });

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
