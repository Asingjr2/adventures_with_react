import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HasName from './components/HasName';
import NewName from './components/NewName';
import Congrats from './WordGuessApp/Congrats';
import GuessedWord from './WordGuessApp/GuessedWords';
import GuessedWords from './WordGuessApp/GuessedWords';

// App for word guess
class App extends Component {
    render() {
      return (
        <div className="App">HEY
          <Congrats></Congrats>
          <GuessedWord></GuessedWord>
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
