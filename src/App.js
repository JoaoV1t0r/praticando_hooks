import React from 'react';
import { Div } from './components/Div';
import './App.css';
import { AppContext } from './contexts/App';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}
export default App;
