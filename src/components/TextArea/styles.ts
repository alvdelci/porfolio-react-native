import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: 75,
  },
  input: {
    width: 100,
    borderWidth: 0.5,
    borderColor: THEME.COLORS.GRAY1,
    padding: 4,
  },
});
