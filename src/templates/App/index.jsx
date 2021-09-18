import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostProvider';
import './index.css';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
export default App;
