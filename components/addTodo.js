import React, { useState } from "react";
import {
  View,
  TextInputComponent,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";

function AddTodo({ handelSubmit }) {
  const [text, setText] = useState("");

  const handleChange = val => {
    setText(val);
  };

  const handlePress = () => {
    handelSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChange={e => handleChange(e.nativeEvent.text)}
        placeholder="Enter todo ..."
        style={styles.input}
        value={text}
      />
      <Button onPress={handlePress} title="ADD" color="#555" />
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%"
  },
  input: {
    borderBottomColor: "#555",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "#fff"
  }
});
