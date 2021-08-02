import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'Esse é o título',
  body: 'O body do contexto',
  counter: 0,
};

// eslint-disable-next-line
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      return { ...state, title: 'Title Mudou' };
    case 'conta': {
      const { counter } = state;
      return { ...state, counter: counter + 1 };
    }
  }
  return { ...state };
};

function App() {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, globalState);
  // eslint-disable-next-line
  const { title, body, counter } = state;
  return (
    <div>
      <h1>
        {title} | {counter}
      </h1>
      <button
        onClick={() => {
          dispatch({ type: 'muda' });
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'conta' });
        }}
      >
        Conta
      </button>
    </div>
  );
}
export default App;
