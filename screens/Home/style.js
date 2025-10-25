import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
});

export default styles;
