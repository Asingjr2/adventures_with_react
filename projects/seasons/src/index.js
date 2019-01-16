import React from 'react';
import ReactDom from "react-dom";


// First class based component.  
// Extended react.component to be able to use those methods/ functions.
// Calling super which brings in all element of parent component.
// Initialize dictionary pair with "null" if it exists but are not sure what it is (int).
// Initialize state allows use of state variables anywhere.
// Must use super to access state
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      lat: 300,
      errorMessage: ''
    };

    // Update set state by referencing dictionary value.
    // All updates in state must be made with this.setState({ <element> : <value>})
    // Second call back if failure.  Err is js object.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  // Can add brackets with arrow function if more than one line.
  // Render should be simple, but additional logic cn be moved into construtor.
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat}   <p>{this.state.errorMessage}  </p></div>
    }

    return <div>LOADING!!!  <p>{this.state.errorMessage}  </p></div>
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
