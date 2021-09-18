import { useEffect, useRef, useState } from 'react';

const useMyHook = (callBack, delay = 1000) => {
  const saveCallBack = useRef();

  useEffect(() => {
    saveCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCallBack.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  // eslint-disable-next-line
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => {
    setCounter((c) => c + 541);
  }, delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <br />
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  );
}
export default App;
