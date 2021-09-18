import { PostContext } from './context';
import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return <PostContext.Provider value={{ postsState, postsDispatch }}>{children}</PostContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
