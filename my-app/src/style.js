import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 36,
    color: "#161572",
    margin: 10,
    fontWeight: "bold",
  },
  formInput: {
    borderColor: "#161572",
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 22,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: "#161572",
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  subButton: {
    padding: 10,
  },
  subTextButton: {
    color: "#161572",
    fontWeight: 700,
  },
});
