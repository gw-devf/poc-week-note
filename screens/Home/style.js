import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonSelectWeek: {
    width: 60,
    height: 60,
    backgroundColor: "#377F8C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 40,
    right: 0,
  },
  buttonSelectWeekText: {
    color: "#F5F5F5",
    fontSize: 32,
  },
  titleDay: {
    fontSize: 18,
    fontWeight: "500",
    color: "#377F8C",
    marginBottom: 12,
  },
  containerContentDay: {
    gap: 4,
  },
  contentDay: {
    fontSize: 14,
    fontWeight: "500",
    color: "#191919",
  },
});

export default styles;
