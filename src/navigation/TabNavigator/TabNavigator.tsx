import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import icon from "../../../assets/magic-ball.png";
import MyPredictionsScreen from "../../screens/MyPredictionsScreen/MyPredictionsScreen";
import Routes from "../routes";
import colors from "../../styles/colors.styles";
import navigationStyles from "./TabNavigatorStyled";
import PredictionDetailScreen from "../../screens/PredictionDetailScreen/PredictionDetailScreen";
import CreatePredictionScreen from "../../screens/CreatePredictionScreen/CreatePredictionScreen";
import EditPredictionScreen from "../../screens/EditPredictionScreen/EditPredictionScreen";
import MyProfileScreen from "../../screens/MyProfileScreen/MyProfileScreen";

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={Routes.myPredictions}
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: colors.beige,
          paddingBottom: 5,
          borderTopColor: colors.grey,
          borderTopWidth: 1,
        },

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
      <Tab.Screen
        name={Routes.editPrediction}
        component={EditPredictionScreen}
        options={{
          unmountOnBlur: true,
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name={Routes.createPrediction}
        component={CreatePredictionScreen}
        options={{
          title: "Create prediction",
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={46} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.myProfile}
        component={MyProfileScreen}
        options={{
          title: "My profile",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCircleUser} size={46} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
