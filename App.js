import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import uuidv1 from "uuid/v1";

export default function App() {
  const [todos, setTodos] = useState([
    { key: uuidv1(), content: "do somthing" },
    { key: uuidv1(), content: "do somthing" },
    { key: uuidv1(), content: "do somthing" }
  ]);

  const handleDelete = key => {
    setTodos([...todos.filter(todo => todo.key !== key)]);
  };

  const handelSubmit = text => {
    if (text.length <= 2) {
      Alert.alert("oops", "Todo must be over 3 characters long");
    } else {
      const todo = {
        key: uuidv1(),
        content: text
      };
      setTodos(prevTodo => [todo, ...prevTodo]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Todo List</Text>
        <AddTodo handelSubmit={handelSubmit} />
        <TodoList todos={todos} handleDelete={handleDelete} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const color = "#fff";
const backgroundColor = "#333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor,
    alignItems: "center",
    paddingTop: 40
  },
  header: {
    color,
    fontSize: 20,
    fontWeight: "bold"
  }
});
