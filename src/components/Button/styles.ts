import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.GREEN,
    padding: 6,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    fontSize: 11,
    color: THEME.COLORS.GRAY2,
  },
});
