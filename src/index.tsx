import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import Hello from './components/Hello/Hello';
import HelloHoc from './components/Hello/HelloHoc';
import HelloHooks from './components/Hello/HelloHooks';
import ErrorBoundary from '@/components/Shared/ErrorBoundary';
import App from '@/router/index';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
