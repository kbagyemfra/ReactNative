import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textStyle1: {
    fontFamily: "Nunito",
    fontSize: 12,
  },
  button: {
    fontFamily: "NunitoBold",
    fontSize: 18,
    backgroundColor: "grey",
  },
  titleText: {
    fontFamily: "NunitoBold",
    fontSize: 30,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  head: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
