import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.beige,
    borderRadius: 15,
    width: 321,
    height: 612,
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
    paddingBottom: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    width: 300,
  },
  text: {
    color: colors.grey,
    fontSize: 20,
  },
  stat: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  button: {
    ...formStyles.button,
    backgroundColor: colors.grey,
    opacity: 0.8,
    width: 200,
    marginTop: 0,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  image: {
    width: "80%",
    height: 100,
    alignItems: "center",
    marginTop: 5,
  },
});

export default styles;
