import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors.styles";
import formStyles from "./form.styles";

const screenStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  secondaryTitle: {
    color: colors.white,
    fontSize: 30,
    marginVertical: 20,
    fontWeight: "bold",
  },
  complementryTitle: {
    color: colors.white,
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
  },
  button: {
    ...formStyles.button,
    marginTop: 80,
    opacity: 0.7,
  },
});

export default screenStyles;
