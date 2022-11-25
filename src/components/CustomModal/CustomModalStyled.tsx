import { StyleSheet } from "react-native";
import colors from "../../styles/colors.styles";

const styles = StyleSheet.create({
  modalSuccess: {
    width: 352,
    height: 139,
    backgroundColor: colors.beige,
    borderTopColor: colors.green,
    borderTopWidth: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
    top: 280,
    fontSize: 24,
  },
  modalError: {
    width: 352,
    height: 139,
    backgroundColor: colors.beige,
    borderTopColor: colors.wine,
    borderTopWidth: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
    top: 280,
    fontSize: 24,
  },
  modalText: {
    fontSize: 24,
  },
});

export default styles;
