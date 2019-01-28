/** Creating reducer that takes state element and action. */
/** Below initial state created to cover critical state elements. */
const INITIAL_STATE = {
  loggedIn: null
}

/** Using spread syntax in javascript to update elements of an object/array with new elements passed in the agruement. */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, loggedIn: true };
    case 'SIGN_OUT':
    return { ...state, loggedIn: false};
    default: 
    return state;
  }
}
