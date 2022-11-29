/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import NumericInput from "react-native-numeric-input";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import usePredictions from "../../hooks/usePredictions/usePredictions";
import { type CreatePredicitonStructure } from "../../redux/features/predictions/predictionsTypes";
import styles from "./CreatePredictionFormStyled";
import matches from "../../utils/matches";

const CreatePredictionForm = (): JSX.Element => {
  const { createPrediction, getPredictions } = usePredictions();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const intialFormData: CreatePredicitonStructure = {
    match: "",
    goalsTeam1: 0,
    goalsTeam2: 0,
    redCards: 0,
    yellowCards: 0,
    penalties: 0,
    picture: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleSubmit = async () => {
    const newPrediction = new FormData();
    newPrediction.append("match", value!);
    newPrediction.append("goalsTeam1", formData.goalsTeam1);
    newPrediction.append("goalsTeam2", formData.goalsTeam2);
    newPrediction.append("redCards", formData.redCards!);
    newPrediction.append("yellowCards", formData.yellowCards!);
    newPrediction.append("penalties", formData.penalties!);
    newPrediction.append("picture", {
      type: imageType,
      uri: imageSelected,
      name: imageName,
    });
    await createPrediction(newPrediction);
    await getPredictions();
  };

  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imageName, setImageName] = useState("");

  const handleFormChange = (text: string, identify: string) => {
    setFormData({
      ...formData,
      [identify]: text,
    });
  };

  const chooseFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
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
    } catch (catchError: unknown) {
      return catchError;
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          items={matches}
          setValue={setValue}
          placeholder="Select a match"
          dropDownDirection="BOTTOM"
        />
        <View style={styles.scoreContainer}>
          <View style={styles.stat}>
            <Text style={styles.text}>Goals Team 1</Text>
            <NumericInput
              value={formData.goalsTeam1}
              onChange={(value) => {
                handleFormChange(value, "goalsTeam1");
              }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
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
          <View>
            <Text style={styles.text}>Goals Team 2</Text>
            <NumericInput
              value={formData.goalsTeam2}
              onChange={(value) => {
                handleFormChange(value, "goalsTeam2");
              }}
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
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
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
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
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
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
              minValue={0}
              maxValue={9}
              totalWidth={120}
              totalHeight={40}
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
        {imageSelected ? (
          <Image source={{ uri: imageSelected }} style={styles.image} />
        ) : (
          ""
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          testID={"submitButton"}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create prediction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePredictionForm;
