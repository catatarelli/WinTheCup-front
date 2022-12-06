import { userMock } from "../../../../../mocks/userMocks";
import type { UserState } from "../../userTypes";
import editUserReducer from "./editUserReducer";

describe("Given a editUserReducer", () => {
  describe("When it recieves an initial state and a payload with username: 'luis123'", () => {
    test("Then it should return a new state with the user data updated", () => {
      const currentUserState = userMock;

      const expectedUserState: UserState = { ...userMock, isLogged: true };

      const newUserState = editUserReducer(currentUserState, {
        payload: userMock,
        type: "editUser",
      });

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
