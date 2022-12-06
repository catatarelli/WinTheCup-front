import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: colors.beige,
    borderRadius: 15,
    width: 321,
    height: 612,
    margin: 10,
    paddingVertical: 15,
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  button: {
    ...formStyles.button,
    backgroundColor: colors.grey,
    opacity: 0.8,
    width: 160,
    marginTop: 10,
    marginBottom: 10,
  },
  logoutButton: {
    ...formStyles.button,
    backgroundColor: colors.beige,
    opacity: 0.8,
    width: 160,
    marginTop: 120,
    marginBottom: 10,
    borderColor: colors.wine,
    borderWidth: 3,
  },
  logoutText: {
    color: colors.wine,
    fontSize: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  input: {
    height: 54,
    marginVertical: 10,
    padding: 10,
    width: 300,
    fontSize: 20,
    color: colors.grey,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.grey,
  },
  label: {
    fontSize: 20,
    color: colors.grey,
  },
});

export default styles;
