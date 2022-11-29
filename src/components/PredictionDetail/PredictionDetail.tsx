import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import type { PredictionStructure } from "../../redux/features/predictions/predictionsTypes";
import styles from "./PredictionDetailStyled";

interface PredictionCardProps {
  prediction: PredictionStructure;
}

const PredictionDetail = ({
  prediction: {
    match,
    goalsTeam1,
    goalsTeam2,
    redCards,
    yellowCards,
    penalties,
    backupPicture,
  },
}: PredictionCardProps): JSX.Element => (
  <View style={styles.container} testID="predictionDetail">
    <Image
      source={{ uri: backupPicture }}
      style={styles.image}
      testID="predictionPicture"
    />
    <View style={styles.textContainer}>
      <Text style={styles.match}>{match}</Text>
      <View style={styles.goalsContainer}>
        <Text style={styles.goals}>{goalsTeam1}</Text>
        <Text style={styles.goals}>{goalsTeam2}</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.stat}>Red cards</Text>
        <Text style={styles.goals}>{redCards}</Text>
        <Text style={styles.stat}>Yellow cards</Text>
        <Text style={styles.goals}>{yellowCards}</Text>
        <Text style={styles.stat}>Penalties</Text>
        <Text style={styles.goals}>{penalties}</Text>
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <Text testID="editButton" style={styles.buttonText}>
          Edit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text testID="closeButton" style={styles.buttonText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default PredictionDetail;
