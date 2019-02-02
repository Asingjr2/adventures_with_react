import streams from '../apis/steams';
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


/** Receiving formValues from submitted form and then submitting through form. */
export const createStreamAction = (formValues) => {
  return async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({ type: CREATE_STREAM, payload: response.data })
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
    const response = await streams.get(`/streams/:${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data })
  };
}

/** Will be submitting updates coming from another form and pushing to udpated. */
export const updateStreamAction = (id, formValues) => {
  return async dispatch => {
    const response = await streams.put(`/streams/:${id}`, formValues);

    dispatch({ type: UPDATE_STREAM, payload: response.data })
  };
}

/** No response data needed from await request. */
export const deleteStreamAction = (id) => {
  return async dispatch => {
    await streams.delete(`/streams/:${id}`);

    dispatch({ type: DELETE_STREAM, payload: id})
  };
}
