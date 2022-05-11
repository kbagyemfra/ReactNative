import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  header: { height: 80, paddingTop: 38, backgroundColor: "coral" },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Header;
