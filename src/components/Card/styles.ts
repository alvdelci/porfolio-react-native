import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 75,
    backgroundColor: THEME.COLORS.GRAY3,
    padding: 10,
  },
  image: {
    width: 15,
    height: 15,
    marginBottom: 5,
  },
  title: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.GRAY1,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: 105,
    height: 2,
    backgroundColor: THEME.COLORS.GREEN,
  },
});
