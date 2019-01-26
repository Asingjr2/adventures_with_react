import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/** Apply middleware needed to support redux-thunk. */ 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

/** Modifying code to support the integration of thunk middleware. */
// ReactDOM.render(
//   <Provider store={ createStore(reducers) }>
//     <App />
//   </Provider>, 
//   document.querySelector('#root')
// );

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.querySelector('#root')
);
