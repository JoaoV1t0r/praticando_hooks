import React, { useContext } from 'react';
import './App.css';

const globalState = {
  title: 'Esse é o título',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const H1 = () => {
  const context = useContext(GlobalContext);
  return <h1>{context.title}</h1>;
};

// eslint-disable-next-line
const Div = ({ chieldren }) => {
  return <H1 />;
};

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Div />
    </GlobalContext.Provider>
  );
}
export default App;
