/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import icon from "../../../assets/magic-ball.png";
import MyPredictionsScreen from "../../screens/MyPredictionsScreen/MyPredictionsScreen";
import Routes from "../routes";
import colors from "../../styles/colors.styles";
import navigationStyles from "./TabNavigatorStyled";
import PredictionDetailScreen from "../../screens/PredictionDetailScreen/PredictionDetailScreen";

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Routes.myPredictions}
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.wine,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Routes.myPredictions}
        component={MyPredictionsScreen}
        options={{
          title: "My predictions",
          tabBarIcon: () => (
            <Image source={icon} style={navigationStyles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.predictionDetail}
        component={PredictionDetailScreen}
        options={{
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
