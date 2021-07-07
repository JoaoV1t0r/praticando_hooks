import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //executa quando qualquer estado muda
  useEffect(() => {
    console.log('Sempre executa quando muda');
  });

  //executa quando é montado
  useEffect(() => {
    console.log('Executa quando é montado');
  }, []);

  //Exucuta qunado o estado do que é passado como dependencia muda
  useEffect(() => {
    console.log('Counter mudou para ', counter);
  }, [counter]);

  return (
    <div className="App">
      <div>
        <h1>Counter: {counter}</h1>
        <h1>Counter2: {counter2}</h1>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          +(2)
        </button>
      </div>
    </div>
  );
}
export default App;
