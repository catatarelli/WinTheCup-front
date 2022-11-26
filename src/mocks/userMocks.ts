import type { UserState } from "../redux/features/user/userTypes";

export const registerDataMock = {
  username: "pepito123",
  password: "pepito123",
  email: "pepito@gmail.com",
};

export const userMock = {
  id: "asdf234",
  username: "luis123",
  token: "testtoken",
  isLogged: false,
  predictions: [],
};

export const emptyUserMock = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const loggedInUserStateMock: UserState = {
  ...userMock,
  isLogged: true,
};
