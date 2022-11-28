/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError } from "axios";
import { REACT_APP_API_URL } from "@env";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import type {
  PredictionByIdResponse,
  PredictionsResponse,
} from "../../redux/features/predictions/predictionsTypes";
import { loadPredictionsActionCreator } from "../../redux/features/predictions/predictionsSlice";

const usePredictions = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

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

  const getPredictionById = useCallback(
    async (predictionId: string) => {
      dispatch(showLoadingActionCreator());

      try {
        const response = await axios.get<PredictionByIdResponse>(
          `${REACT_APP_API_URL}/predictions/${predictionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(hideLoadingActionCreator());
        return response.data;
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
    },
    [dispatch]
  );

  return { getPredictions, getPredictionById };
};

export default usePredictions;
