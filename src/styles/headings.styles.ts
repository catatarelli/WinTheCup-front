import { StyleSheet } from "react-native";
import colors from "./colors.styles";

const headingStyles = StyleSheet.create({
  pageTitle: {
    color: colors.grey,
    fontSize: 30,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  myPredictionsTitle: {
    color: colors.grey,
    fontSize: 30,
    marginTop: 150,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default headingStyles;
