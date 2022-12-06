import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    height: Dimensions.get("window").height,
    width: "100%",
    backgroundColor: "#ffffffa1",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gif: {
    height: 150,
    width: 150,
  },
  modal: {
    zIndex: 1100,
  },
});

export default styles;
