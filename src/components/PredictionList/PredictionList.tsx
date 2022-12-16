/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  FlatList,
  View,
  type ListRenderItem,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import image from "../../../assets/ball-in-the-net.webp";
import Routes from "../../navigation/routes";
import type { PredictionStructure } from "../../redux/features/predictions/predictionsTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import formStyles from "../../styles/form.styles";
import headingStyles from "../../styles/headings.styles";
import { LoginScreenNavigationProp } from "../../types/navigation.types";
import LoadMore from "../LoadMore/LoadMore";
import PredictionCard from "../PredictionCard/PredictionCard";
import listStyles from "./PredictionListStyled";
import countries from "../../utils/countries";
import { addFilterActionCreator } from "../../redux/features/ui/uiSlice";

interface PredictionListProps {
  predictions: PredictionStructure[];
}

const PredictionList = ({ predictions }: PredictionListProps): JSX.Element => {
  const renderItem: ListRenderItem<PredictionStructure> = ({ item }) => (
    <PredictionCard prediction={item} key={item.match} />
  );

  const dispatch = useAppDispatch();

  const { currentPage, totalPages } = useAppSelector(
    (state) => state.ui.pagination
  );

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleFilterChange = (country: string) => {
    dispatch(addFilterActionCreator(country));
  };

  const handleFilterReset = () => {
    dispatch(addFilterActionCreator(""));
    setValue("");
  };

  return (
    <>
      {predictions.length !== 0 ? (
        <View style={listStyles.container}>
          <Text style={headingStyles.pageTitle}>My Predictions</Text>
          <View style={listStyles.filter}>
            <DropDownPicker
              listMode="MODAL"
              open={open}
              setOpen={setOpen}
              value={value}
              items={countries}
              setValue={setValue}
              onChangeSearchText={() => handleFilterChange(value)}
              placeholder="Filter by country"
              dropDownDirection="BOTTOM"
              testID="dropdown"
              containerStyle={{ width: 190 }}
              stickyHeader={true}
            />
            <TouchableOpacity
              style={listStyles.removeFilter}
              onPress={handleFilterReset}
              testID="removeFilter"
            >
              <Text style={listStyles.removeFilterText}>Remove filter</Text>
            </TouchableOpacity>
          </View>
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
      ) : (
        <>
          <Text style={headingStyles.pageTitle}>My Predictions</Text>
          <View>
            <ImageBackground source={image} style={listStyles.image}>
              <View>
                <Text style={listStyles.imageText}>You have no</Text>
                <Text style={listStyles.imageText}>predictions yet</Text>
              </View>
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
      )}
    </>
  );
};

export default PredictionList;
