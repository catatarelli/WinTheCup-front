import { emptyUserMock } from "../../../mocks/userMocks";
import { userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it recieves an initial state with an empty user and 'unknown' action", () => {
    test("Then it should return a new state with a copy of the empty user", () => {
      const unknownAction = {
        type: "unknownAction",
        payload: emptyUserMock,
      };

      const currentUserState = emptyUserMock;

      const newUserState = userReducer(currentUserState, unknownAction);

      expect(newUserState).toStrictEqual(currentUserState);
    });
  });
});
