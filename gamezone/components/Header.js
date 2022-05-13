import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Header = () => {
  const openMenu = () => {
    console.log("Jesus");
  };

  return (
    <>
      <View style={globalStyles.head}>
        {/* Icon */}
        <MaterialIcons
          name="menu"
          size={28}
          onPress={openMenu}
          style={globalStyles.icon}
        />
        <View>
          <Text style={globalStyles.headText}>GameZone</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
