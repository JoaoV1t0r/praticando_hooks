import React, { useState } from 'react';
import { Suspense } from 'react';
// import LazyComponent from './laze-component';7

const loadComponent = () => import('./laze-component');
const LazyComponent = React.lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          {show ? 'Show' : 'Show Off'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>{show && <LazyComponent />}</Suspense>
    </div>
  );
};
