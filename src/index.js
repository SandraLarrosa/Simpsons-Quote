import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import './stylesheets/reset.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
