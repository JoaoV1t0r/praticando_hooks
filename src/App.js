import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const [counter, setCounter] = useState(0);

  const handlerClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador : 0</h1>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handlerClick}>
          Reverse
        </button>
      </header>
    </div>
  );
}
export default App;
