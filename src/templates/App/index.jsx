import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/ExampleProvider';
import { PostsProvider } from '../../contexts/PostProvider';
import './index.css';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
export default App;
