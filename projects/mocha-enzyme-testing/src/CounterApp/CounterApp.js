import React from 'react';

// for comparison with counterApp testing
class CounterApp extends React.Component {
  state = {
    counter: 0
  }

  onClick= () => {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1});
  }

  decrement = () => {
    let counter = this.state.counter;
    this.setState({ counter: counter - 1 });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display"> COUNTER IS CURRENTLY {this.state.counter}</h1>

        <button data-test="increment-button"
        onClick={this.onClick}>ADD ONE</button>

        <button data-test="decrement-button"
        onClick={this.decrement}>Subtract ONE</button>

      </div>
    )
  };
};

export default CounterApp;
