import React, { Component } from 'react';
import './App.css';

import HasName from './components/HasName';
import NewName from './components/NewName';
import Congrats from './WordGuessApp/Congrats';
import GuessedWords from './WordGuessApp/GuessedWords';

// App for word guess
class App extends Component {
    render() {
      return (
        <div className="App container">
          <h1>WORD GUESS</h1>
          <Congrats success={true} ></Congrats>
          <GuessedWords guessedWords={ [{guessedWord: 'nice', letterMatchCount:3}] }></GuessedWords>
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
//         <HasName friend='my friend'/>
//       </div>
//     );
//   }
// }

export default App;
