import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <>
      <View>
        <TextInput
          placeholder="new todo...."
          onChangeText={changeHandler}
          style={styles.inputt}
        />
        <Button
          onPress={() => {
            submitHandler(text);
            // setText("");
          }}
          title="add todo"
          color="coral"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputt: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
