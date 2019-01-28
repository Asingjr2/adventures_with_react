/** Function updates state with user data received from jsonplaceholder.com in cache. */
export default (state=[], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return [...state, action.payload];
    default:
      return state;
  }
}
