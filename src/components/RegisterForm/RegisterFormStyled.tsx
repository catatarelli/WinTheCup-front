import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  input: {
    height: 54,
    marginVertical: 10,
    padding: 10,
    width: 300,
    fontSize: 26,
    color: colors.grey,
    backgroundColor: colors.white,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.white,
  },
  label: {
    color: colors.white,
    fontSize: 30,
  },
  button: {
    width: 266,
    alignItems: "center",
    justifyContent: "center",
    height: 57,
    borderRadius: 20,
    backgroundColor: colors.white,
    color: colors.white,
    opacity: 0.6,
    padding: 10,
    marginVertical: 25,
  },
  buttonText: {
    fontSize: 30,
  },
  background: {
    backgroundColor: colors.black,
    opacity: 0.7,
    width: 375,
    height: 551,
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 40,
    color: colors.white,
  },
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  loginText: {
    fontSize: 24,
    color: colors.white,
  },
  loginLink: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default styles;
