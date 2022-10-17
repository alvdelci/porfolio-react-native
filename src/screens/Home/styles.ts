import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: THEME.COLORS.BACKGROUND,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
