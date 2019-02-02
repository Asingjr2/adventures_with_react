import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './streamReducer';

const formReducer = reducer;

/** formReducer has to be assigend to form. */
export default combineReducers({
  auth: authReducer, 
  form: formReducer,
  streams: streamReducer
});
