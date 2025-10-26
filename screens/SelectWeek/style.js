import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#191919",
    textAlign: "center",
  },
  linkButton: {
    width: 300,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#6AA8B3",
    justifyContent: "center",
    alignItems: "center",
  },
  linkButtonText: {
    color: "#F5F5F5",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
