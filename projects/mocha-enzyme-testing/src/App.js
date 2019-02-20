import React, { Component } from 'react';
import './App.css';

// import HasName from './components/HasName';
import Congrats from './WordGuessApp/Congrats';
import GuessedWords from './WordGuessApp/GuessedWords';
import CounterApp from './CounterApp/CounterApp';

// App for word guess
class App extends Component {
    render() {
      return (
        <div className="App container">
          <h1 className="App-title">WORD GUESS</h1>
          <Congrats success={true} ></Congrats>
          <GuessedWords guessedWords={ [{guessedWord: 'nice', letterMatchCount:3}] }></GuessedWords>
          <CounterApp></CounterApp>
        </div>
      );
    };
  };



// App for counter project
// see src/counterapp/CounterApp



//  App for original base testing.
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HasName friends='my friend'/>
//       </div>
//     );
//   }
// }

export default App;
