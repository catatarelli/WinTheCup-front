/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import usePredictions from "../../hooks/usePredictions/usePredictions";
import styles from "./CreatePredictionFormStyled";
import type {
  Match,
  PredictionStructure,
} from "../../redux/features/predictions/predictionsTypes";

interface CreatePredictionFormProps {
  matches: Match[];
  currentPrediction: PredictionStructure;
}

const CreatePredictionForm = ({
  matches,
  currentPrediction,
}: CreatePredictionFormProps): JSX.Element => {
  const { createPrediction, getPredictions, updatePrediction } =
    usePredictions();

  const initialFormData = {
    match: currentPrediction.match,
    goalsTeam1: currentPrediction.goalsTeam1,
    goalsTeam2: currentPrediction.goalsTeam2,
    redCards: currentPrediction.redCards,
    yellowCards: currentPrediction.yellowCards,
    penalties: currentPrediction.penalties,
    picture: currentPrediction.picture,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imageName, setImageName] = useState("");

  const handleSubmit = async () => {
    const newPrediction = new FormData();
    if (currentPrediction.match) {
      newPrediction.append("match", currentPrediction.match);
    } else {
      newPrediction.append("match", value);
    }

    newPrediction.append("goalsTeam1", formData.goalsTeam1.toString());
    newPrediction.append("goalsTeam2", formData.goalsTeam2.toString());
    newPrediction.append("redCards", formData.redCards!.toString());
    newPrediction.append("yellowCards", formData.yellowCards!.toString());
    newPrediction.append("penalties", formData.penalties!.toString());
    if (imageSelected)
      newPrediction.append("picture", {
        type: imageType,
        uri: imageSelected,
        name: imageName,
      });
    if (currentPrediction.match) {
      await updatePrediction(newPrediction, currentPrediction.id);
      await getPredictions();

      return;
    }

    await createPrediction(newPrediction);
    await getPredictions();
  };

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  const chooseFile = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    });
    if (!result.canceled) {
      const localUri = result.assets[0].uri;
      setImageSelected(localUri);
      const filename = localUri.split("/").pop();
      setImageName(filename!);
      const match = /\.(\w+)$/.exec(filename!);
      const type = match ? `image/${match[1]}` : `image`;
      setImageType(type);
    }
  };

  const matchAndDate = currentPrediction.match.split("-");

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {currentPrediction.match ? (
          <>
            <Text style={styles.match}>{matchAndDate[0]}</Text>
            <Text style={styles.match}>{matchAndDate[1]}</Text>
          </>
        ) : (
          <DropDownPicker
            listMode="SCROLLVIEW"
            open={open}
            setOpen={setOpen}
            value={value}
            items={matches}
            setValue={setValue}
            placeholder="Select a match"
            dropDownDirection="BOTTOM"
            testID="dropdown"
          />
        )}
        <View style={styles.scoreContainer}>
          <View style={styles.stat}>
            <Text style={styles.text}>Goals Team 1</Text>
            <NumericInput
              value={formData.goalsTeam1}
              onChange={(value) => {
                handleFormChange(value, "goalsTeam1");
              }}
              extraTextInputProps={{ testID: "goalsTeam1" }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
              iconSize={50}
              initValue={formData.goalsTeam1}
              step={1}
              valueType="integer"
              textColor="#3F3F3F"
              iconStyle={{ color: "white" }}
              type={"plus-minus"}
              rightButtonBackgroundColor="#8A1538"
              leftButtonBackgroundColor="#8A1538"
            />
          </View>
          <View>
            <Text style={styles.text}>Goals Team 2</Text>
            <NumericInput
              value={formData.goalsTeam2}
              onChange={(value) => {
                handleFormChange(value, "goalsTeam2");
              }}
              extraTextInputProps={{ testID: "goalsTeam2" }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
              initValue={formData.goalsTeam2}
              iconSize={50}
              step={1}
              valueType="integer"
              textColor="#3F3F3F"
              iconStyle={{ color: "white" }}
              type={"plus-minus"}
              rightButtonBackgroundColor="#8A1538"
              leftButtonBackgroundColor="#8A1538"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.stat}>
            <Text style={styles.text}>Red Cards</Text>
            <NumericInput
              value={formData.redCards}
              onChange={(value) => {
                handleFormChange(value, "redCards");
              }}
              extraTextInputProps={{ testID: "redCards" }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
              initValue={formData.redCards}
              iconSize={50}
              step={1}
              valueType="integer"
              textColor="#3F3F3F"
              iconStyle={{ color: "white" }}
              type={"plus-minus"}
              rightButtonBackgroundColor="#8A1538"
              leftButtonBackgroundColor="#8A1538"
            />
          </View>
          <View style={styles.stat}>
            <Text style={styles.text}>Yellow Cards</Text>
            <NumericInput
              value={formData.yellowCards}
              onChange={(value) => {
                handleFormChange(value, "yellowCards");
              }}
              extraTextInputProps={{ testID: "yellowCards" }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
              initValue={formData.yellowCards}
              iconSize={50}
              step={1}
              valueType="integer"
              textColor="#3F3F3F"
              iconStyle={{ color: "white" }}
              type={"plus-minus"}
              rightButtonBackgroundColor="#8A1538"
              leftButtonBackgroundColor="#8A1538"
            />
          </View>
          <View style={styles.stat}>
            <Text style={styles.text}>Penalties</Text>
            <NumericInput
              value={formData.penalties}
              onChange={(value) => {
                handleFormChange(value, "penalties");
              }}
              extraTextInputProps={{ testID: "penalties" }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
              initValue={formData.penalties}
              iconSize={50}
              step={1}
              valueType="integer"
              textColor="#3F3F3F"
              iconStyle={{ color: "white" }}
              type={"plus-minus"}
              rightButtonBackgroundColor="#8A1538"
              leftButtonBackgroundColor="#8A1538"
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text>Upload a picture of your winner team!</Text>

        <TouchableOpacity onPress={chooseFile} testID="image-picker">
          <FontAwesomeIcon icon={faCamera} size={40} />
        </TouchableOpacity>
        {currentPrediction.picture && !imageSelected && (
          <Image
            source={{ uri: currentPrediction.backupPicture }}
            style={styles.image}
          />
        )}
        {imageSelected ? (
          <Image source={{ uri: imageSelected }} style={styles.image} />
        ) : (
          ""
        )}

        {currentPrediction.match ? (
          <TouchableOpacity
            onPress={handleSubmit}
            testID={"submitButton"}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Edit prediction</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleSubmit}
            testID={"submitButton"}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create prediction</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CreatePredictionForm;
