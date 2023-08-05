import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import './js/media_query.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);