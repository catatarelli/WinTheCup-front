/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCirclePlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import icon from "../../../assets/magic-ball.png";
import MyPredictionsScreen from "../../screens/MyPredictionsScreen/MyPredictionsScreen";
import Routes from "../routes";
import colors from "../../styles/colors.styles";
import navigationStyles from "./TabNavigatorStyled";
import PredictionDetailScreen from "../../screens/PredictionDetailScreen/PredictionDetailScreen";
import CreatePredictionScreen from "../../screens/CreatePredictionScreen/CreatePredictionScreen";
import { logoutUserActionCreator } from "../../redux/features/user/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import useToken from "../../hooks/useToken/useToken";
import { useNavigation } from "@react-navigation/native";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import CustomModal from "../../components/CustomModal/CustomModal";

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogout = () => {
    removeToken();
    dispatch(logoutUserActionCreator());
    navigation.navigate(Routes.login);
  };

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
        name={Routes.createPrediction}
        component={CreatePredictionScreen}
        options={{
          title: "Create prediction",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCirclePlus} size={46} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.logout}
        listeners={{
          tabPress: handleLogout,
        }}
        component={CustomModal}
        options={{
          title: "Log out",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size={46}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
