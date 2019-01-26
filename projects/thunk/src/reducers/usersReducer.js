/** Function ends up adding user object to array of users which will be filtered through later by ID alone. */
export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}
