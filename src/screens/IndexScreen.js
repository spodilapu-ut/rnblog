import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => {
          blogPost.id;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text key={item.id} style={styles.titleStyle}>
                {item.title}
              </Text>
              <Feather name="trash" style={styles.iconStyle}></Feather>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "red",
  },
  iconStyle: {
    fontSize: 24,
  },
  titleStyle: {
    fontSize: 18,
  },
});

export default IndexScreen;
