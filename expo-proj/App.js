import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import Sandbox from "./components/SandBox";
import ToForm from "./components/ToForm";

export default function App() {
  return (
    <>
      {/* <Sandbox /> */}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <ToForm />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
    fontSize: 24,
    // backgroundColor: "#00FFFF",
    flex: 1,
  },
});
