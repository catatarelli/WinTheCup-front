import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API_URL } from "@env";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import type {
  LoginResponse,
  RegisterData,
  UserCredentials,
} from "../../redux/features/user/userTypes";
import { type JwtCustomPayload } from "../../types/types";
import decodeToken from "../../utils/decodeToken";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (userData: RegisterData) => {
    try {
      await axios.post(`${REACT_APP_API_URL}/user/register`, userData);
      dispatch(
        openModalActionCreator({
          modal: "Account created successfully",
          isError: false,
        })
      );
    } catch {
      dispatch(
        openModalActionCreator({
          modal: "User is already registered",
          isError: true,
        })
      );
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      const responseData = await axios.post<LoginResponse>(
        `${REACT_APP_API_URL}/user/login`,
        userData
      );
      if (responseData.status === 401) {
        dispatch(
          openModalActionCreator({ modal: "Wrong credentials", isError: true })
        );
      }

      const { token } = responseData.data;
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      await AsyncStorage.setItem("token", token);
    } catch {
      dispatch(
        openModalActionCreator({
          modal: "It is not possible to login",
          isError: true,
        })
      );
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
