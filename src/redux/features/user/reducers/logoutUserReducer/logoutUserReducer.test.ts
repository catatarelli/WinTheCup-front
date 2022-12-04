import { type UserState } from "../../userTypes";
import logoutUserReducer from "./logoutUserReducer";

describe("Given a logoutUserReducer", () => {
  describe("When it recieves an initial state with a user with username: 'luis123'", () => {
    test("Then it should return a new state with an empty user", () => {
      const expectedUserState: UserState = {
        id: "",
        username: "",
        token: "",
        isLogged: false,
      };

      const newUserState = logoutUserReducer();

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
