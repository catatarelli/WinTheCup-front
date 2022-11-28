import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type Routes from "../navigation/routes";

export interface LogRootStackParamList {
  [Routes.login]: undefined;
  [Routes.register]: undefined;
  [Routes.welcome]: undefined;
  [Routes.myPredictions]: undefined;
  [Routes.predictionDetail]: undefined;
  [Routes.home]: undefined;
}

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  LogRootStackParamList,
  Routes.login
>;
