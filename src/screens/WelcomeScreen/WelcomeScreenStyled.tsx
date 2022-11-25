import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const welcomeStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginTop: 140,
    marginBottom: 100,
    width: 350,
    height: 50,
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

export default welcomeStyles;
