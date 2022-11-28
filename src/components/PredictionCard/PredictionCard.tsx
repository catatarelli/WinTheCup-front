/* eslint-disable @typescript-eslint/no-floating-promises */
import { useNavigation } from "@react-navigation/native";
import { faSquareXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./PredictionCardStyled";
import type { LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../navigation/routes";
import usePredictions from "../../hooks/usePredictions/usePredictions";
import type { PredictionStructure } from "../../redux/features/predictions/predictionsTypes";

interface PredictionCardProps {
  prediction: PredictionStructure;
}

const PredictionCard = ({
  prediction: { match, goalsTeam1, goalsTeam2, picture, id },
}: PredictionCardProps): JSX.Element => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { getPredictionById } = usePredictions();

  const handlePress = () => {
    getPredictionById(id);
    navigation.navigate(Routes.predictionDetail);
  };

  return (
    <View style={styles.container} testID="predictionCard">
      <Image source={picture} style={styles.image} testID="predictionPicture" />
      <TouchableOpacity onPress={handlePress} testID="toDetail">
        <View style={styles.textContainer}>
          <Text style={styles.match}>{match}</Text>

          <View style={styles.goalsContainer}>
            <Text style={styles.goals}>{goalsTeam1}</Text>
            <Text style={styles.goals}>{goalsTeam2}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <Text testID="editButton">
            <FontAwesomeIcon icon={faPencil} size={30} style={styles.icon} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text testID="closeButton">
            <FontAwesomeIcon
              icon={faSquareXmark}
              size={30}
              style={styles.icon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PredictionCard;
