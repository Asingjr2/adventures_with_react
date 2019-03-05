// contains action creators to handle changes in login states and CRUD for streams
import streams from '../apis/steams';
// bringing in history that i manually craeted
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  CREATE_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS
} from './types';


export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = userId => {
  return {
    type: SIGN_OUT,
    payload: userId
  };
};


/** 
 * Receiving formValues from submitted form and 
 * then submitting for user with reducer to update listing.
 * Destructuring userId from getState.auth object
 */
export const createStreamAction = (formValues) => {
  return async (dispatch, getState) => {
    const {userId} = getState().auth;

    // const response = await streams.post('/streams', formValues);
    // line change in include destructured userId element from the getState auth object
    const response = await streams.post('/streams', { ...formValues, userId})

    dispatch({ type: CREATE_STREAM, payload: response.data });

    // manually navigating user to using manually created history
    history.push('/');
  };
}

/** Fetch all streams and not sending data. */
export const fetchStreamsAction = () => {
  return async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data })
  };
}

export const fetchSingleStreamAction = (id) => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data })
  };
}

/** Will be submitting updates coming from another form and pushing to udpated. */
export const updateStreamAction = (id, formValues) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: UPDATE_STREAM, payload: response.data });

    console.log('item updated successfully');
    // manually navigating user to home using manually created history
    history.push('/');
  };
}

/** No response data needed from await request. */
export const deleteStreamAction = (id) => {
  return async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id});

    // manually navigating user to home using manually created history
    history.push('/');  
  };
}
