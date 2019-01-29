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
