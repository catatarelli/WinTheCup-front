import { StyleSheet } from "react-native";
import formStyles from "../../styles/form.styles";

const loginStyles = StyleSheet.create({
  button: {
    ...formStyles.button,
    marginTop: 50,
  },
  buttonDisabled: {
    ...formStyles.buttonDisabled,
    marginTop: 50,
  },
  background: {
    ...formStyles.background,
    height: 450,
  },
});

export default loginStyles;
