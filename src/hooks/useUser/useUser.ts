import axios from "axios";
import { REACT_APP_API_URL } from "@env";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import type { RegisterData } from "../../types/userTypes";

const useUser = () => {
  const dispatch = useAppDispatch();
  const url = REACT_APP_API_URL;

  const registerUser = async (userData: RegisterData) => {
    try {
      const responseData = await axios.post(`${url}/user/register`, userData);
      if (responseData.status === 201) {
        dispatch(
          openModalActionCreator("Registered successfully! Please login")
        );
      }
    } catch (error: unknown) {
      throw new Error(
        `It's not possible to register: ${(error as Error).message}`
      );
    }
  };

  return { registerUser };
};

export default useUser;
