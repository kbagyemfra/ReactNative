import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Alert, View } from "react-native";
import TodoItem from "./ToForm/TodoItem";
import AddTodo from "./AddTodo";

const ToForm = () => {
  var peeps = [
    { text: "play shaun in mario kart", id: "1" },
    { text: "use yoshi as a character", id: "2" },
    { text: "find mario poster", id: "3" },
    { text: "play luigi's mansion", id: "4" },
    { text: "save peach from evil", id: "5" },
    { text: "run away from toad", id: "6" },
    { text: "defeat bowser again", id: "7" },
    { text: "step on the koopa", id: "8" },
  ];

  const [todos, setTodos] = useState(peeps);

  const pressHandler = (id) => {
    const newTo = (prev) => {
      return prev.filter((todo) => todo.id != id);
    };
    setTodos(newTo);
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      const prevTodo = (prevTodos) => {
        return [...prevTodos, { text: text, key: Math.random().toString() }];
      };
      setTodos(prevTodo);
    } else {
      Alert.alert("OOPS", "Todos must be more than 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <>
      <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    flex: 1,
  },
});

export default ToForm;
