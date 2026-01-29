import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles"; // Import the styles
import Button from "../components/Button";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logoPrimary}
          source={require("../assets/little-lemon-logo.png")}
          resizeMode="contain"
        />
        <View style={styles.copyContainer}>
          <Text style={styles.headline} accessibilityRole="header">
            Welcome to Little Lemon
          </Text>
          <Text style={styles.subcopy}>Your local Mediterranean bistro</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate("Menu")}>View menu</Button>

        <Button onPress={() => navigation.navigate("Subscribe")}>
          Join our newsletter
        </Button>
      </View>
    </View>
  );
}
