import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostProvider/actions';
import { PostContext } from '../../contexts/PostProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostContext);

  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>Oi</h1>
      {postsState.loading && (
        <p>
          <strong>CARREGANDO...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
