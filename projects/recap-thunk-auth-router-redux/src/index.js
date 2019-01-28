import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import App from './components/App';
// import reducers from './reducers';

ReactDOM.render(
  // </Provider>,
  <App />,
  document.querySelector("#root")
);


// NEED TO COMPLETE OAUTH, COMBINED REDUCER, and DISPLAY OF INFORMATION RECEIEVED FROM JSONPLACEHOLDER
