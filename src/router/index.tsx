import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { basePath, routes } from './config';
import { generateRouter } from './utils';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>{generateRouter(basePath, true)(routes)}</Routes>
    </Router>
  );
};

export default App;

export { withBasePath } from './utils';
