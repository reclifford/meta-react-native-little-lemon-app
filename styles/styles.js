import { StyleSheet } from "react-native";
import { Color } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    padding: 32,
  },
  copyContainer: {
    alignItems: "center",
    width: "100%",
    gap: 8,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 12,
  },
  gap16: {
    gap: 16,
  },
  gap24: {
    gap: 24,
  },
  textCenter: {
    textAlign: "center",
  },
  logoPrimary: {
    width: 140,
    height: 200,
  },
  logoSub: {
    width: 100,
    height: 120,
  },
  headline: {
    color: "#333",
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 800,
  },
  subcopy: {
    color: "#333",
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#006554",
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: 0.1,
    textTransform: "capitalize",
  },
  buttonPressed: {
    transform: [{ scale: 1.025 }],
    opacity: 0.9,
  },
  disabled: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
    borderRadius: 8,
    textAlignVertical: "top",
  },
});

export { styles };
