import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { goToNextPageActionCreator } from "../../redux/features/ui/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./LoadMoreStyled";

const LoadMore = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(goToNextPageActionCreator());
  };

  return (
    <View>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.buttonText}>Load more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadMore;
