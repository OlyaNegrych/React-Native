// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from "react-native";
// import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        // source={require("../assets/images/bg_photo.jpg")}
      >
        <View style={styles.form}>
          <View style={styles.userPhoto}></View>
          <Text>Реєстрація</Text>
          <TextInput style={styles.input} />
          <TextInput style={{ ...styles.input, marginTop: 16 }} />
          <TextInput
            style={{ ...styles.input, marginTop: 16 }}
            secureTextEntry={true}
          />
          <Button title="Показати" style={styles.show} />
          <Button title="Зареєструватися" style={styles.register} />
          <Button title="Вже є аккаунт? Увійти" style={styles.login} />
        </View>
      </ImageBackground>
    </View>
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
  form: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    // borderWidth: 1,
    // borderColor: "black",
    borderRadius: 5,
    // borderRadius: 25 25 0 0,
  },
  userPhoto: {},
  input: {
    width: 250,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
    color: "black",
  },
  show: {
    fontSize: 24,
    backgroundColor: "white",
  },
  register: {
    backgroundColor: "#FF6C00",
    width: 250,
    color: "white",
    borderRadius: 100,
  },
  login: {
    fontSize: 24,
  },
});
