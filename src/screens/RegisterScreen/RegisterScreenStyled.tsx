import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
