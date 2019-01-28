/** Used to update logged in state in app. */
const INITIAL_STATE = {
  loggedIn: null
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    return { ...state, loggedIn: true }
    case 'SIGN_OUT':
    return { ...state, loggedIn: false }
    default:
    return state
  }
}
