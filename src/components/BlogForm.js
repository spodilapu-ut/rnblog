import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogForm = ({ blogPost, onSubmit }) => {
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
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
        onPress={() => {
          onSubmit(title, content);
        }}
        title="Save Blog"
      />
    </View>
  );
};
BlogForm.defaultProps = {
  blogPost: {
    title: "",
    content: "",
  },
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

export default BlogForm;
