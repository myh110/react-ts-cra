import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Star: React.FC<{}> = () => {
  return (
    <>
      <h1>I am Star</h1>
      <div>
        I am Star sub component
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Star;
