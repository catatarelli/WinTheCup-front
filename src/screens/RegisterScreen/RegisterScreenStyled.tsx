import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
