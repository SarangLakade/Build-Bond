import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const {} = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", Payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", Payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
