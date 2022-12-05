import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    height: Dimensions.get("window").height,
    width: "100%",
    backgroundColor: colors.white,
    opacity: 0.6,
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
