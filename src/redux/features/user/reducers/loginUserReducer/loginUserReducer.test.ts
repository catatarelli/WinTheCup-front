import { userMock } from "../../../../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "../../userSlice";
import { UserState } from "../../userTypes";

describe("Given a loginUserReducer", () => {
  describe("When it recieves an initial state with a user with username: 'luis123'", () => {
    test("Then it should return a new state with the user and its the property isLogged changed to true", () => {
      const currentUserState = userMock;

      const expectedUserState: UserState = { ...userMock, isLogged: true };

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userMock)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
