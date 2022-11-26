import { createSlice } from "@reduxjs/toolkit";
import loadPredictionsReducer from "./reducers/loadPredictionsReducer/loadPredictionsReducer";
import loginUserReducer from "./reducers/loginUserReducer/loginUserReducer";
import logoutUserReducer from "./reducers/logoutUserReducer/logoutUserReducer";
import { type UserState } from "./userTypes";

export const userInitialState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
  predictions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUserReducer,
    logoutUserReducer,
    loadPredictionsReducer,
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUserReducer: loginUserActionCreator,
  logoutUserReducer: logoutUserActionCreator,
  loadPredictionsReducer: loadPredictionsActionCreator,
} = userSlice.actions;
