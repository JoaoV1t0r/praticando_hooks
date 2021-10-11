import { Children, cloneElement } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
};

export const Home = () => {
  return (
    <Parent>
      <p>Oi</p>
    </Parent>
  );
};
