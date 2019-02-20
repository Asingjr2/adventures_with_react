import {actionTypes} from '../actions';

/**
 * temporary reducer that returns null
 */
export default function successReducer(state=false, action) {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
};



