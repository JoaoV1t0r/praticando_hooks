import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <>
      <button onClick={handleClick}>Counted {counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '200px', width: '100px', overflow: 'scroll' }}>
        {counted.map((count, index) => {
          return <p key={`count-${index}`}>{count}</p>;
        })}
      </div>
    </>
  );
};
