import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

function TodoList({ todos }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={todo => todo.key}
        data={todos}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.content}</Text>
        )}
      />
    </View>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "80%"
  },
  item: {
    borderColor: "lightgrey",
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    margin: 8
  }
});
