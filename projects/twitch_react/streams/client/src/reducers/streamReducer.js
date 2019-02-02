// reducer upddates state to handle steam actions related to CRUD

import _ from 'lodash';
import {
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS
} from '../actions/types';

/**
 * Syntax the same for most because the same response item is being passed in the payload 
 * Delete is different since only an id is being passed
 */ 
export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAMS:
    // duplicating state then using lodash function to map keys to objects object id as keys
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      // creating new state object and retun single stream item
      return {...state, [action.payload.id]: action.payload}
    case CREATE_STREAM:
      // payload in this item is newly created pair which will exist in array
      return {...state, [action.payload.id]: action.payload}
    case UPDATE_STREAM:
      // payload for update is the same because the spread opeation will update old values automatically
      return {...state, [action.payload.id]: action.payload}
    case DELETE_STREAM:
      // lodash used with omit function which creates new object minus desired item to be deleted
      return _.omit(state, action.payload)
    default: 
      return state
  };
};
