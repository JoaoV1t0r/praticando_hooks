import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

const Button = React.memo(function Button({ functionClick }) {
  return (
    <button
      onClick={() => {
        functionClick(10);
      }}
    >
      +
    </button>
  );
});

Button.propTypes = {
  functionClick: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Counter: {counter}</h1>
        <Button functionClick={handleIncrement} />
      </div>
    </div>
  );
}
export default App;
