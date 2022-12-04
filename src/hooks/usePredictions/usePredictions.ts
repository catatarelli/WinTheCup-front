/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCallback } from "react";
import { REACT_APP_API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import {
  hideLoadingActionCreator,
  loadPagesActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import type {
  CreatePredicitonStructure,
  PredictionsResponse,
  PredictionStructure,
  UpdatePredicitonStructure,
} from "../../redux/features/predictions/predictionsTypes";
import {
  loadMorePredictionsActionCreator,
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

      const { predictions, totalPages } = response.data;

      dispatch(loadPredictionsActionCreator(predictions));
      dispatch(loadPagesActionCreator({ totalPages, currentPage: 0 }));
      dispatch(hideLoadingActionCreator());
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modal: "There was an error loading your predictions",
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
            modal: "There was an error loading your prediction",
          })
        );
      }
    },
    [dispatch]
  );

  const getMorePredictions = useCallback(
    async (page: number) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.get<PredictionsResponse>(
          `${REACT_APP_API_URL}/predictions`,
          {
            params: { page },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { predictions, totalPages } = response.data;

        dispatch(loadMorePredictionsActionCreator(predictions));
        dispatch(loadPagesActionCreator({ totalPages, currentPage: page }));
        dispatch(hideLoadingActionCreator());
      } catch {
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            modal: "There was loading more predictions",
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
        })
      );
      navigation.navigate(Routes.myPredictions);
    } catch {
      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          modal: "There was an error creating the prediction",
          isError: true,
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
        })
      );
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          modal: "There was an error on the server",
          isError: true,
        })
      );
    }
  };

  const updatePrediction = async (
    prediction: UpdatePredicitonStructure,
    predictionId: string
  ) => {
    dispatch(showLoadingActionCreator());
    try {
      await axios.patch(
        `${REACT_APP_API_URL}/predictions/update/${predictionId}`,
        prediction,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          modal: "Prediction updated successfully",
        })
      );

      navigation.navigate(Routes.myPredictions);
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modal: "There was an error updating the prediction",
        })
      );
    }
  };

  return {
    getPredictions,
    getPredictionById,
    getMorePredictions,
    createPrediction,
    deletePrediction,
    updatePrediction,
  };
};

export default usePredictions;
