import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/todoList";

export default function App() {
  const [todos, setTodos] = useState([
    { key: 1, content: "do somthing" },
    { key: 2, content: "do somthing" },
    { key: 3, content: "do somthing" }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>todo List</Text>
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20
  }
});
