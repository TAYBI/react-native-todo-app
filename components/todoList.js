import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert
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
              <AntDesign name="checkcircleo" size={24} color="#ff6255" />
              <Text style={styles.text}>{item.content}</Text>
            </TouchableOpacity>
            <View>
              <Ionicons
                name="ios-timer"
                size={30}
                color="#ffc23c"
                onPress={() => Alert.alert("timerr")}
              />
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
    borderColor: "#666",
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    borderStyle: "solid",
    margin: 5,
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
