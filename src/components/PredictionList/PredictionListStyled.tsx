import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const listStyles = StyleSheet.create({
  footer: {
    marginBottom: 10,
  },
  image: {
    width: 321,
    height: 612,
    resizeMode: "cover",
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageText: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    ...formStyles.button,
    opacity: 0.7,
  },
});

export default listStyles;
