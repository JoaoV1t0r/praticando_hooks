import { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick();
  };

  useLayoutEffect(() => {
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Counted {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
};

export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [rand, setRant] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRant(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div ref={divRef} style={{ height: '400px', width: '300px', overflow: 'scroll' }}>
      {counted.map((count, index) => {
        return (
          <p onClick={handleClick} key={`count-${index}`}>
            {count} +++ {rand}
          </p>
        );
      })}
    </div>
  );
});
