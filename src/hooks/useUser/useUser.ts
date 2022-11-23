import axios from "axios";
import { REACT_APP_API_URL } from "@env";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import type { RegisterData } from "../../types/userTypes";

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

  return { registerUser };
};

export default useUser;
