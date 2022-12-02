/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API_URL } from "@env";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import type {
  LoginResponse,
  RegisterData,
  UserCredentials,
} from "../../redux/features/user/userTypes";
import { type JwtCustomPayload } from "../../types/types";
import decodeToken from "../../utils/decodeToken";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const registerUser = async (userData: RegisterData) => {
    dispatch(showLoadingActionCreator());
    try {
      await axios.post(`${REACT_APP_API_URL}/user/register`, userData);
      dispatch(
        openModalActionCreator({
          modal: "Account created successfully",
          isError: false,
          isLoading: false,
        })
      );
      dispatch(hideLoadingActionCreator());
      navigation.navigate(Routes.login);
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          modal: "User is already registered",
          isError: true,
          isLoading: false,
        })
      );
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    dispatch(showLoadingActionCreator());
    try {
      const responseData = await axios.post<LoginResponse>(
        `${REACT_APP_API_URL}/user/login`,
        userData
      );

      const { token } = responseData.data;
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      await AsyncStorage.setItem("token", token);
      dispatch(hideLoadingActionCreator());
      navigation.navigate(Routes.home);
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          modal: "Wrong credentials",
          isError: true,
          isLoading: false,
        })
      );
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
