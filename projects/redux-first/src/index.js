import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
// Below represents importing the entire file.
// In this instance the default is the combined reducer.
import reducers from './reducers';

// Provider created to be able to access all react satte elements and functions that will aslo be passed down throughout the app.
ReactDOM.render(
  <Provider store={ createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root'));
