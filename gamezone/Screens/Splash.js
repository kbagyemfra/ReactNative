import { StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Splash Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default Splash;
