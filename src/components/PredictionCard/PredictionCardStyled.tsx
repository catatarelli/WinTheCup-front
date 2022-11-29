import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    borderRadius: 15,
    width: 350,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    paddingRight: 10,
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
    width: 90,
    height: 100,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    resizeMode: "cover",
    zIndex: 100,
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  match: {
    fontSize: 16,
    marginBottom: 10,
  },
  goalsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 160,
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
  },
  icon: {
    color: colors.grey,
  },
});

export default styles;
