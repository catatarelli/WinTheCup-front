import type { PayloadAction } from "@reduxjs/toolkit";
import type { EditUserPayload, UserState } from "../../userTypes";

const editUserReducer = (
  previousUser: UserState,
  action: PayloadAction<EditUserPayload>
) => ({
  ...previousUser,
  ...action.payload,
  isLogged: true,
});

export default editUserReducer;
