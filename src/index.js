import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css'
import Routes from './router/Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);