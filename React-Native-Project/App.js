import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from "react-native";
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <ImageBackground
      style={styles.image}
      // source={require("../assets/images/bg_photo.jpg")}
    >
      <View style={styles.container}>
        <TextInput style={styles.input} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    height: 40,
    borderRadius: 5
  }
});
