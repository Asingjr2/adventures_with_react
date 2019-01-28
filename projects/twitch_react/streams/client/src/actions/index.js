/** 
 * Signin action creator that will help reducers update login state.
 * Action creator return actions with type and optional payload.
 */
export const signIn = () => {
  return {
    type: 'SIGN_IN'
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
