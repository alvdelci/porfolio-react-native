import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textLeft: {
    fontWeight: "bold",
    fontSize: 16,
    color: THEME.COLORS.GRAY2,
  },
  contentRight: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentRightText: {
    color: THEME.COLORS.GRAY2,
  },
  presentation: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.GRAY2,
  },
  subtitle: {
    fontSize: 11,
    color: THEME.COLORS.GRAY2,
  },
  whatIDo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  centeredTitle: {
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
    color: THEME.COLORS.GRAY2,
  },
  about: {
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 15,
    color: THEME.COLORS.GRAY2,
  },
  presentationButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
  downloadButton: {
    backgroundColor: THEME.COLORS.GREEN,
    marginRight: 5,
    padding: 6,
  },
  learnMoreButton: {
    padding: 6,
    borderWidth: 0.6,
    backgroundColor: "transparent",
    borderColor: "gray",
  },
  buttonText: {
    fontSize: 11,
    color: THEME.COLORS.GRAY2,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  skills: {
    flexDirection: "row",
    width: "92%",
    height: 100,
    alignSelf: "center",
    justifyContent: "space-around",
    backgroundColor: THEME.COLORS.GRAY3,
  },
  skillItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  skillPercent: {
    color: THEME.COLORS.GRAY1,
    fontWeight: "bold",
    fontSize: 18,
  },
  skillTitle: {
    color: THEME.COLORS.GREEN,
    fontSize: 11,
  },
  getInTouchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  getInTouchContainer: {
    padding: 8,
  },
  footer: {
    marginTop: 20,
    marginBottom: 8,
    color: THEME.COLORS.GRAY1,
    alignSelf: "center",
    fontSize: 12,
  },
});
