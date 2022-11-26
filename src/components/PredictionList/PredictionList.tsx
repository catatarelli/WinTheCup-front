import React from "react";
import { FlatList, View, type ListRenderItem } from "react-native";
import type { PredictionStructure } from "../../redux/features/user/userTypes";
import PredictionCard from "../PredictionCard/PredictionCard";
import listStyles from "./PredictionListStyled";

interface PredictionListProps {
  predictions: PredictionStructure[];
}

const PredictionList = ({ predictions }: PredictionListProps): JSX.Element => {
  const renderItem: ListRenderItem<PredictionStructure> = ({ item }) => (
    <PredictionCard prediction={item} key={item.match} />
  );

  return (
    <View>
      <FlatList
        data={predictions}
        renderItem={renderItem}
        ListFooterComponent={<View style={listStyles.footer} />}
      />
    </View>
  );
};

export default PredictionList;
