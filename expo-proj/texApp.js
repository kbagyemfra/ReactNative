import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  var peeps = [
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "koopa", id: "8" },
  ];

  const [people, setPeople] = useState(peeps);

  const pressHandler = (id) => {
    console.log(id);

    setPeople((prevPeople) => {
      return prevPeople.filter((p) => p.id != id);
    });
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View id={item.id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      {/* Flat List Component */}
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "yellow",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
  // buttonContainer: {
  //   marginTop: 20,
  //   backgroundColor: "#cec3e6",
  // },
  // vContainer: {
  //   marginTop: 20,
  //   backgroundColor: "#F5F5DC",
  // },
  // cContainer: {
  //   marginTop: 20,
  //   backgroundColor: "#F4A460",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#777",
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
  // textBox: {
  //   left: 40,
  // },
});
