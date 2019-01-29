/** Creating reducer that takes state element and action. */
/** Below initial state created to cover critical state elements. */
const INITIAL_STATE = {
  loggedIn: null,
  userId: null
}

/** 
 * Using spread syntax in javascript to update elements of an object/array 
 * with new elements passed in the agruement. 
 * Updating user id on log in and removing at logout.
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, loggedIn: true, userId: action.payload };
    case 'SIGN_OUT':
    return { ...state, loggedIn: false, userId: null};
    default: 
    return state;
  }
}
