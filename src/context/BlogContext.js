import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "set_blog_posts":
      return action.payload;
    case "edit_blog_post":
      return state.map((blogPost) => {
        return blogPost.id == action.payload.id ? action.payload : blogPost;
      });
    case "delete_blog_post":
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload;
      });
    default:
      return state;
  }
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("blogPosts");
    dispatch({ type: "set_blog_posts", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post("/blogPosts", { title, content });
    callback();
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });
    dispatch({ type: "edit_blog_post", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete("blogPosts/" + id);
    dispatch({ type: "delete_blog_post", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
