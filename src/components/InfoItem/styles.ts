import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  externalCircle: {
    height: 25,
    width: 25,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.GRAY3,
  },
  internalCircle: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: THEME.COLORS.GREEN,
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
    color: THEME.COLORS.GRAY2,
  },
  subtitle: {
    fontSize: 11,
    color: THEME.COLORS.GRAY2,
  },
});
