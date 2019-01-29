import streams from '../apis/steams';

/** 
 * Signin action creator that will help reducers update login state.
 * Action creator return actions with type and optional payload.
 * Sending userId for reference in other parts of app.
 */
export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

/** A bit overkill to create functions to return a string, 
 * but is consistent and allows for more logic later. 
 * Would be easier to just create separate action file listing these out.*/
export const fetchSingleStream = () => {
  return {
    type: 'FETCH_STREAM'
  };
};

export const createStream = () => {
  return {
    type: 'CREATE_STREAM'
  };
};

export const updateStream = () => {
  return {
    type: 'UPDATE_STREAM'
  };
};

export const deleteStream = () => {
  return {
    type: 'DELETE_STREAM'
  };
};

export const fetchStreams = () => {
  return {
    type: 'FETCH_STREAMS'
  };
};

/** Receiving formValues from submitted form and then submitting through form. */
export const createStreamAction = (formValues) => {
  return async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({ type: createStream, payload: response.data })
  };
}

/** Fetch all streams and not sending data. */
export const fetchStreamsAction = () => {
  return async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: fetchStreams, payload: response.data })
  };
}

export const fetchSingleStreamAction = (id) => {
  return async dispatch => {
    const response = await streams.get(`/streams/:${id}`);

    dispatch({ type: fetchSingleStream, payload: response.data })
  };
}

/** Will be submitting updates coming from another form and pushing to udpated. */
export const updateStreamAction = (id, formValues) => {
  return async dispatch => {
    const response = await streams.put(`/streams/:${id}`, formValues);

    dispatch({ type: updateStream, payload: response.data })
  };
}

/** No response data needed from await request. */
export const deleteStreamAction = (id) => {
  return async dispatch => {
    await streams.delete(`/streams/:${id}`);

    dispatch({ type: deleteStream, payload: id})
  };
}
