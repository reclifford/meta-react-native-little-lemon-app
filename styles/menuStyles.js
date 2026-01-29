import { StyleSheet } from "react-native";
import { Color } from "./colors";

const menuStyles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: Color.black,
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: Color.yellow,
  },
  sectionHeader: {
    color: "black",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
    paddingVertical: 16,
  },
});

export { menuStyles };
