import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";

export default function Button({ children, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
