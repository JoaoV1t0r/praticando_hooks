import { useContext, useEffect, useRef } from 'react';
import { incrementCounter, decrementCounter } from '../../contexts/ExampleProvider/actions';
import { CounterContext } from '../../contexts/ExampleProvider/context';
import { loadPosts } from '../../contexts/PostProvider/actions';
import { PostContext } from '../../contexts/PostProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostContext);

  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);

  const { counterState, counterDispatch } = counterContext;

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
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter {counterState.counter}-</button>
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
