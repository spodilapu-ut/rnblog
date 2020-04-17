import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <View style={styles.row}>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        style={styles.textInputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.textStyle}>Enter Content:</Text>
      <TextInput
        style={styles.textInputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.buttonStyle}
        title="Add Blog"
        onPress={() => addBlogPost(title, content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 5,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "grey",
    fontSize: 18,
    height: 50,
    padding: 5,
    marginBottom: 15,
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonStyle: {
    height: 50,
  },
});

export default CreateScreen;
