/** Function updates state with post data received from jsonplaceholder.com in cache. */
export default (state=[], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return [...state, action.payload];
    default:
      return state;
  }
}
