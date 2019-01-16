import React from 'react';
import ReactDom from 'react-dom';
import DisplaySeason from './DisplaySeason';
import Spinner from './Spinner';


// First class based component.  
// Extended react.component to be able to use those methods/ functions.
// Constructor not required to use state (called implicitely.)
// Calling super which brings in all element of parent component.
// Initialize dictionary pair with 'null' if it exists but are not sure what it is (int).
// Initialize state allows use of state variables anywhere.
// Must use super to access state.
// Shorthand state initialization == state = { lat:null, errorMessage:''}
class App extends React.Component {
  // constructor (props) {
  //   super(props);

  //   this.state = { lat: 300, errorMessage: '' };
  //   console.log('This was constructed')
  // }

  // Added time in state
  state = { lat:null, errorMessage:'', time:new Date().toLocaleTimeString() }

  componentDidMount() {
    console.log('This just mounted');

    // Creating with updating time method
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() 
      }) 
      }, 1000)

    // Update set state by referencing dictionary value.
    // All updates in state must be made with this.setState({ <element> : <value>})
    // Second call back if failure.  Err is js object.
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
      );
  }

  componentDidUpdate() {
    console.log('This just updated')
  }

  // Can add brackets with arrow function if more than one line.
  // Render should be simple, but additional logic cn be moved into construtor.
  // Best to have conditional logic outside of render.

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>
    }

    // Can pass state from parent down to the child component.
    if (!this.state.errorMessage && this.state.lat) {
      return <DisplaySeason lat={this.state.lat} />
    }

    // Replacing text with actual emblem.
    // return <div>LOADING!!!  <p>{this.state.errorMessage}  </p></div>
    return <Spinner message="Accept location to show deals in your area." />
  }

  render() {
    console.log('This was rendered')

    return (
      <div className="customBorder">
        <h2>CURRENT TIME: {this.state.time}</h2>
        {this.renderContent()}
      </div>
      )
    
  }
}

ReactDom.render(<App />, document.querySelector("#root"));

/*
Below is functional compenent that performs logic.

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // first call back function (success call-back)
    (position) => console.log(position),
    (err) => console.log(err)
  )

  return <div> Latitude: </div>;
}
*/
