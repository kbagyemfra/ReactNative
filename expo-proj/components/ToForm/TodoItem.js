import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <>
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <View style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
          {/* <MaterialIcons name="delete" size={18} color="#333" /> */}
          <MaterialIcons name="delete" size={22} color="black" />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  },
  text: {
    marginRight: 10,
  },
});

export default TodoItem;
