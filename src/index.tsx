import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '@/components/Shared/ErrorBoundary';
import App from '@/router/index';
import './index.module.scss';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
