import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('Render 2');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    body: P.string,
    title: P.string,
  }),
};

function App() {
  console.log('Render 1');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <input
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <div>
        {useMemo(() => {
          return posts.map((post) => {
            return <Post key={post.id} post={post} />;
          });
        }, [posts])}
      </div>
    </div>
  );
}
export default App;
