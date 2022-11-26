import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    borderRadius: 15,
    width: 321,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
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
    width: 80,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    resizeMode: "cover",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  match: {
    fontSize: 16,
  },
  goalsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  goals: {
    borderColor: colors.grey,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginRight: 10,
  },
  icon: {
    color: colors.grey,
  },
});

export default styles;
