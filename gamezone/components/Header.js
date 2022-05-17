import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Header = ({ navigation }) => {
  // console.log(navigation);

  const openMenu = () => {
    // navigation.openDrawer();
  };

  return (
    <>
      <View style={globalStyles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={globalStyles.headerImage}
        />
        <Text style={globalStyles.headText}>GameZone</Text>
      </View>
    </>
  );
};

export default Header;
