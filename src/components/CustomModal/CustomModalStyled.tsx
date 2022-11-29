import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  modalSuccess: {
    width: 352,
    height: 139,
    backgroundColor: colors.beige,
    borderTopColor: colors.green,
    borderTopWidth: 40,
    borderLeftColor: colors.grey,
    borderLeftWidth: 2,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    borderRightColor: colors.grey,
    borderRightWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
    top: 360,
    left: 30,
    fontSize: 24,
  },
  modalError: {
    width: 352,
    height: 139,
    backgroundColor: colors.beige,
    borderTopColor: colors.wine,
    borderTopWidth: 40,
    borderLeftColor: colors.grey,
    borderLeftWidth: 2,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    borderRightColor: colors.grey,
    borderRightWidth: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
    top: 360,
    left: 30,
    fontSize: 24,
  },
  modalText: {
    fontSize: 24,
  },
  icon: {
    color: colors.grey,
  },
});

export default styles;
