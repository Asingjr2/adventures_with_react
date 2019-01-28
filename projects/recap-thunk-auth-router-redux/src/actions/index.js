/** Base action creator and action types file. */
import _ from 'lodash';
import placeholder from '../apis/placeholder';

/** Below used with google oauth2 to update loggedIn state. */
export const signIn = () => {
  type: 'SIGN_IN'
};

/** Below used with google oauth2 to update loggedIn state. */
export const signOut = () => {
  type: 'SIGN_OUT';
};


/** Creating async function that grabs posts from jsonplaceholder.com. */
export const getPosts = () => {
  console.log('grabbing posts');
  return async dispatch => {
    const response = await placeholder.get('/posts');
    console.log('completed posts request');

    dispatch({
      type: 'GET_POSTS',
      payload: response.data
    });
    console.log('dispatched get posts action!')
  }
}

/** Creating async function that grabs posts from jsonplaceholder.com. */
export const getUsers = () => {
  console.log('grabbing users');
  return async dispatch => {
    const response = await placeholder.get('/users');
    console.log('completed users requet');

    dispatch({
      type: 'GET_USERS',
      payload: response.data
    });
    console.log('dispatched get users action!')
  }
}

/** Creating reducer that calls other reducers possible through react thunk. */
export const getPostsAndUser = () => async (dispatch, getState) => {
  /** Starting async process. */
  console.log('starting post/user combined request');
  await dispatch(getPosts());
  await dispatch(getUsers());

  /** Using memoized function to store results of posts and users in cache. */
  need to finish

}
