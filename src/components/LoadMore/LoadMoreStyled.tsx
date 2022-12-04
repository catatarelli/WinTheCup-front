import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const styles = StyleSheet.create({
  button: {
    ...formStyles.button,
    backgroundColor: colors.grey,
    opacity: 0.8,
    width: 120,
    marginTop: 0,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;
