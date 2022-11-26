/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_API_URL } from "@env";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import type {
  LoginResponse,
  PredictionsResponse,
  RegisterData,
  UserCredentials,
} from "../../redux/features/user/userTypes";
import { type JwtCustomPayload } from "../../types/types";
import decodeToken from "../../utils/decodeToken";
import {
  loadPredictionsActionCreator,
  loginUserActionCreator,
} from "../../redux/features/user/userSlice";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";
import { useCallback } from "react";

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { token } = useAppSelector((state) => state.user);

  const registerUser = async (userData: RegisterData) => {
    try {
      await axios.post(`${REACT_APP_API_URL}/user/register`, userData);
      dispatch(
        openModalActionCreator({
          modal: "Account created successfully",
          isError: false,
          isLoading: false,
        })
      );
      navigation.navigate(Routes.login);
    } catch {
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
    try {
      const responseData = await axios.post<LoginResponse>(
        `${REACT_APP_API_URL}/user/login`,
        userData
      );
      if (responseData.status === 401) {
        dispatch(
          openModalActionCreator({
            modal: "Wrong credentials",
            isError: true,
            isLoading: false,
          })
        );
      }

      const { token } = responseData.data;
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      await AsyncStorage.setItem("token", token);
    } catch {
      dispatch(
        openModalActionCreator({
          modal: "Wrong credentials",
          isError: true,
          isLoading: false,
        })
      );
    }
  };

  const getPredictions = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const response = await axios.get<PredictionsResponse>(
        `${REACT_APP_API_URL}/predictions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const apiResponse = response.data;

      dispatch(loadPredictionsActionCreator(apiResponse.predictions));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());
      if (error instanceof AxiosError) {
        dispatch(
          openModalActionCreator({
            isError: true,
            modal: (error as AxiosError<{ error: string }>).response?.data
              .error!,
            isLoading: false,
          })
        );
      }
    }
  }, [dispatch]);

  return { registerUser, loginUser, getPredictions };
};

export default useUser;
