/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  View,
  type ListRenderItem,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import image from "../../../assets/ball-in-the-net.webp";
import Routes from "../../navigation/routes";
import type { PredictionStructure } from "../../redux/features/predictions/predictionsTypes";
import { useAppSelector } from "../../redux/hooks";
import formStyles from "../../styles/form.styles";
import headingStyles from "../../styles/headings.styles";
import { LoginScreenNavigationProp } from "../../types/navigation.types";
import LoadMore from "../LoadMore/LoadMore";
import PredictionCard from "../PredictionCard/PredictionCard";
import listStyles from "./PredictionListStyled";

interface PredictionListProps {
  predictions: PredictionStructure[];
}

const PredictionList = ({ predictions }: PredictionListProps): JSX.Element => {
  const renderItem: ListRenderItem<PredictionStructure> = ({ item }) => (
    <PredictionCard prediction={item} key={item.match} />
  );

  const { currentPage, totalPages } = useAppSelector(
    (state) => state.ui.pagination
  );

  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <>
      {predictions.length === 0 ? (
        <>
          <Text style={headingStyles.pageTitle}>My Predictions</Text>
          <View>
            <ImageBackground source={image} style={listStyles.image}>
              <Text style={listStyles.imageText}>
                You have no predictions yet
              </Text>
              <TouchableOpacity style={listStyles.button}>
                <Text
                  style={formStyles.buttonText}
                  onPress={() => {
                    navigation.navigate(Routes.createPrediction);
                  }}
                  testID="CreateButton"
                >
                  Start Playing
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </>
      ) : (
        <View>
          <Text style={headingStyles.pageTitle}>My Predictions</Text>
          <FlatList
            data={predictions}
            renderItem={renderItem}
            ListFooterComponent={
              <View style={listStyles.footer}>
                {currentPage !== totalPages - 1 && <LoadMore />}
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </>
  );
};

export default PredictionList;
