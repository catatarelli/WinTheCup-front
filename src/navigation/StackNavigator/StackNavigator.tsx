import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import Routes from "../routes";
import WelcomeScreen from "../../screens/WelcomeScreen/WelcomeScreen";
import MyPredictionsScreen from "../../screens/MyPredictionsScreen/MyPredictionsScreen";
import { useAppSelector } from "../../redux/hooks";
import CustomModal from "../../components/CustomModal/CustomModal";
import Loading from "../../components/Loading/Loading";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen";
import PredictionDetailScreen from "../../screens/PredictionDetailScreen/PredictionDetailScreen";
import TabNavigator from "../TabNavigator/TabNavigator";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();
  const { isLoading, modal } = useAppSelector((state) => state.ui);

  return (
    <>
      <Stack.Navigator initialRouteName={Routes.welcome}>
        <Stack.Screen
          name={Routes.welcome}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.register}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.myPredictions}
          component={MyPredictionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.predictionDetail}
          component={PredictionDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.home}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {modal && <CustomModal />}
      {isLoading && <Loading />}
    </>
  );
};

export default StackNavigatorExplorer;
