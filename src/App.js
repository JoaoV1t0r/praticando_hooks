import { createContext, useContext, useReducer } from 'react';
import P from 'prop-types';
import './App.css';

export const globalState = {
  title: 'Esse é o título',
  body: 'O body do contexto',
  counter: 0,
};

export const reducer = (state, action) => {
  console.log(action);
  return { ...state };
};

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

export const H1 = () => {
  const context = useContext(Context);
  return <h1 onClick={() => context.dispatch({ type: 'CHANGE TITLE' })}>{context.state.title}</h1>;
};

function App() {
  // const [state] = useState(globalState);
  // const { title, body } = state;
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}
export default App;
