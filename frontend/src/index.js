import React from 'react';
import {Prodiver} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
);
