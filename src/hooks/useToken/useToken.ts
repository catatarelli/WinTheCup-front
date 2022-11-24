import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUserActionCreator } from "../../redux/features/user/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const checkToken = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = async () => {
    await AsyncStorage.removeItem("token");
  };

  return { checkToken, removeToken };
};

export default useToken;
