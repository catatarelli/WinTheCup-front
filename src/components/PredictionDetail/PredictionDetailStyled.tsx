import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    borderRadius: 15,
    width: 321,
    height: 612,
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
    paddingBottom: 10,
    marginBottom: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: 321,
    height: 164,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
    zIndex: 100,
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  match: {
    fontSize: 20,
    marginVertical: 5,
  },
  goalsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 210,
    marginBottom: 10,
  },
  goals: {
    borderColor: colors.grey,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    width: 45,
    height: 45,
    textAlign: "center",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  stat: {
    fontSize: 20,
    marginVertical: 5,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
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
