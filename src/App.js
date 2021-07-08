import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ post, handleCLick }) => {
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleCLick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  handleCLick: P.func,
  post: P.shape({
    id: P.number,
    body: P.string,
    title: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState();
  const input = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
  });

  const handleCLick = (title) => {
    setValue(title);
  };

  return (
    <div className="App">
      <input
        ref={input}
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div>
        {useMemo(() => {
          return posts.map((post) => {
            return <Post key={post.id} post={post} handleCLick={handleCLick} />;
          });
        }, [posts])}
      </div>
    </div>
  );
}
export default App;
