import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer } from 'redux-form';

const formReducer = reducer;

/** formReducer has to be assigend to form. */
export default combineReducers({
  auth: authReducer, 
  form: formReducer
});
