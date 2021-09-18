import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });
  const postRaws = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRaws.json();
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
