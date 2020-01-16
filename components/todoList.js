import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

function TodoList({ handleDelete, todos }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.key}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <TouchableOpacity
              onPress={() => handleDelete(item.key)}
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <AntDesign name="checkcircleo" size={24} color="#ffc2c2" />
              <Text style={styles.text}>{item.content}</Text>
            </TouchableOpacity>
            <View>
              <Ionicons name="ios-timer" size={30} color="#ffc255" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "row",
    width: "80%",
    justifyContent: "flex-end"
  },
  item: {
    color: "#fff",
    borderColor: "lightgrey",
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 15,
    margin: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    color: "#fff",
    paddingLeft: 10
  }
});
