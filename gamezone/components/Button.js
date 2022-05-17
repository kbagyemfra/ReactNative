import { Text, View, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const FlatButton = ({ text, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FlatButton;
