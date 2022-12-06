import { createSlice } from "@reduxjs/toolkit";
import editUserReducer from "./reducers/editUserReducer/editUserReducer";
import loginUserReducer from "./reducers/loginUserReducer/loginUserReducer";
import logoutUserReducer from "./reducers/logoutUserReducer/logoutUserReducer";
import { type UserState } from "./userTypes";

export const userInitialState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUserReducer,
    logoutUserReducer,
    editUserReducer,
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUserReducer: loginUserActionCreator,
  logoutUserReducer: logoutUserActionCreator,
  editUserReducer: editUserActionCreator,
} = userSlice.actions;
