import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserLoginData, UserState } from "../../userTypes";

const loginUserReducer = (
  previousUser: UserState,
  action: PayloadAction<UserLoginData>
) => ({
  ...previousUser,
  ...action.payload,
  isLogged: true,
});

export default loginUserReducer;
