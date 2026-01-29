import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { validateEmail } from "../utils";
import Button from "../components/Button";

export default function SubscribeScreen({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const isEmailValid = validateEmail(email);

  const handlePressAndNavigate = () => {
    Alert.alert("Thanks for subscribing!", "Stay tuned", [
      {
        text: "OK",
        onPress: () => {
          navigation.popToTop();
        },
      },
    ]);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.contentContainer}>
        <Image
          style={styles.logoSub}
          source={require("../assets/little-lemon-logo-grey.png")}
          resizeMode="contain"
        />
        <View style={[styles.copyContainer, styles.gap24]}>
          <Text style={[styles.subcopy, styles.textCenter]}>
            Subscribe to our newsletter for the latest news and delicious
            recipes.
          </Text>
          <View style={[styles.copyContainer, styles.gap16]}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Enter your email"}
              keyboardType={"email-address"}
            />
            <Button onPress={handlePressAndNavigate} disabled={!isEmailValid}>
              Subscribe
            </Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
