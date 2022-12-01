/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCallback } from "react";
import { REACT_APP_API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import type {
  CreatePredicitonStructure,
  PredictionsResponse,
  PredictionStructure,
} from "../../redux/features/predictions/predictionsTypes";
import {
  loadOnePredictionActionCreator,
  loadPredictionsActionCreator,
} from "../../redux/features/predictions/predictionsSlice";
import Routes from "../../navigation/routes";

const usePredictions = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigation = useNavigation<LoginScreenNavigationProp>();

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
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modal: "There was an error on the server",
          isLoading: false,
        })
      );
    }
  }, [dispatch]);

  const getPredictionById = useCallback(
    async (predictionId: string) => {
      dispatch(showLoadingActionCreator());

      try {
        const response = await axios.get<PredictionStructure>(
          `${REACT_APP_API_URL}/predictions/${predictionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(loadOnePredictionActionCreator(response.data));
        dispatch(hideLoadingActionCreator());
      } catch {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            modal: "There was an error on the server",
            isLoading: false,
          })
        );
      }
    },
    [dispatch]
  );

  const createPrediction = async (prediction: CreatePredicitonStructure) => {
    dispatch(showLoadingActionCreator());

    try {
      await axios.post(`${REACT_APP_API_URL}/predictions/create`, prediction, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          modal: "Prediction created successfully! Good luck",
          isError: false,
          isLoading: false,
        })
      );
      navigation.navigate(Routes.myPredictions);
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          modal: `${(error as Error).message}`,
          isError: true,
          isLoading: false,
        })
      );
    }
  };

  const deletePrediction = async (predictionId: string) => {
    dispatch(showLoadingActionCreator());

    try {
      await axios.delete(
        `${REACT_APP_API_URL}/predictions/delete/${predictionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          modal: "Prediction deleted",
          isError: false,
          isLoading: false,
        })
      );
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          modal: "There was an error on the server",
          isError: true,
          isLoading: false,
        })
      );
    }
  };

  return {
    getPredictions,
    getPredictionById,
    createPrediction,
    deletePrediction,
  };
};

export default usePredictions;
