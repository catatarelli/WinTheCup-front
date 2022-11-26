import { userMock } from "../../../../../mocks/userMocks";
import { logoutUserActionCreator, userReducer } from "../../userSlice";
import { type UserState } from "../../userTypes";

describe("Given a logoutUserReducer", () => {
  describe("When it recieves an initial state with a user with username: 'luis123'", () => {
    test("Then it should return a new state with an empty user", () => {
      const currentUserState = userMock;

      const expectedUserState: UserState = {
        id: "",
        username: "",
        token: "",
        isLogged: false,
        predictions: [],
      };

      const newUserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
