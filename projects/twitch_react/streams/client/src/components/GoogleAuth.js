import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

/**
 * Window.gapi is used to load google library for auth2
 * and then it is used to initialize client.  Check docs at
 * developers.google.com/api-client-library/javascript/reference/referencedocs
 */
class GoogleAuth extends React.Component {
  /** Using library to start async request connect with google. */
  componentDidMount() {
    /** Load gives us library. */
    window.gapi.load('client:auth2', () => {
      /** Init returns a promise showing that library has been initialized. */
      window.gapi.client.init({
        clientId: '652937323943-4ttsjnmaodlfrktlvit7rk158vodf0q5.apps.googleusercontent.com', 
        scope: 'email'
      }).then(
        () => {
          /** 
           * Below grabs auth object then
           * passes auth object to onAuth logged in state (i.e true or false) then
           * uses event listener to be used in conjunction with state. 
           */
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());  // grabs status
          this.auth.isSignedIn.listen(this.onAuthChange); // listens for change
        }
      );
    });
  }

  /** 
   * Creating arrow function so this is tied to component. 
   * Updating state to equal result of is signed in or not signed in.
   * Updating below code to set state using reducers. 
   */
  // onAuthChange = () => {
  //   this.setState({loggedIn: this.auth.isSignedIn.get()})
  // }

  /** Function calls action creator based on logged in status. */
  onAuthChange = loggedIn => {
    if (loggedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  /** Supporting sign in function. */
  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  }

  /** Creating helper function to support login. */
  renderLoginButton() {
    if (this.props.loggedIn) {
      return (
        <button className="ui red google button"
        onClick={this.onSignOut}>
          <i className="google icon" />
          SIGN OUT
        </button>
      )
    } else {
      return (
        <button className="ui green google button"
        onClick={this.onSignIn}>
          <i className="google icon"/>
          SIGN IN
        </button>
      )
    }
  }
  render() {
    return (
      <div>GOOGLE AUTH
      <h2>{this.renderLoginButton()}</h2></div>
    )
  };
};
/** Must define if outside function. */
const mapStateToProps = state => {
  return { loggedIn: state.auth.loggedIn }
}
export default connect(mapStateToProps, 
  { signIn, signOut}) (GoogleAuth);
