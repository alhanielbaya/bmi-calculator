import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/Store';

import 'spectre.css';
import './vendors/icons.css';
import './vendors/icons.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
