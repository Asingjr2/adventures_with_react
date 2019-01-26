import _ from 'lodash';
/** Exporting function action type. */
import jsonPlaceholder from '../apis/jsonPlaceholder';

/** 
 * Creating async response to request to jsonPlaceholder.
 * First version is incorrect because you can only pass actions into store not functions.
 * Aync code does not work because of the time of the results of data.
 * Need to create async action creator.
 * THUNK allows you to dispatch functions some time in the future (aync delay on getting outside info)
 */
//*****************VERSION 1******************* */
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts');
  
//   return {type: 'FETCH_POSTS', payload: response };
// };

/**
 * Difference with version one is the return of a function does async operations and then uses promise
 * vs creating async request and then returning reponse before request has completed.
 */
export const fetchPosts = () => {
  console.log('starting function');
  /** Refactoring below since getState is not used and an arrow function is more concise. */
  // return async function(dispatch, getState) {
    return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    console.log('submitted async request');
    
    /** Dispatch waits until request is complete to run below? */
    dispatch({type: 'FETCH_POSTS', payload: response.data});
    console.log('finishing dispatch', response)
  };
}

/** Optimized code from above looks like the below with export. */
// const fetchPosts2 = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response.data})
// };

/** 
 * Function belows returns async dispatch function that grabs user using passed id. 
 * Function updated to only run once since original dispatch and get request, which are computationally expensive, are run only once.*/
export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch);
}

/** 
 * Memoizing function to ensure that is only called once.
 * Purpose of below is to hit expensive request only one time and store result in cache (which is accessed when the function is called again).
 * Can test in smaller app with counter.
 *  */
export const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data});
});
