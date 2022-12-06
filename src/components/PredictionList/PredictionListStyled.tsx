import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";
import formStyles from "../../styles/form.styles";

const listStyles = StyleSheet.create({
  footer: {
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
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
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  removeFilter: {
    ...formStyles.button,
    borderRadius: 10,
    height: 50,
    backgroundColor: colors.grey,
    opacity: 0.8,
    width: 140,
    marginTop: 0,
    marginHorizontal: 0,
    marginBottom: 10,
  },
  removeFilterText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default listStyles;
