/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { View, Modal, Image } from "react-native";
import gif from "../../../assets/spinning-ball.gif";
import styles from "./LoadingStyled";

const Loading = () => (
  <Modal
    transparent={true}
    animationType={"none"}
    visible={true}
    style={styles.modal}
    onRequestClose={() => {}}
  >
    <View style={styles.activityIndicatorWrapper}>
      <Image
        source={gif}
        style={styles.gif}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </View>
  </Modal>
);

export default Loading;
