import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import ChatScreen from './components/Chatscreen';


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentScreen: 'UserNameScreen',
      currentUsername: ''
    };
  }

  onUserNameSubmitted = (username) => {
    console.log('submitting some stuff at app level'); 
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username }),
    })
    .then(res => {
      console.log('success Samus');
      this.setState({
        currentUsername: username,
        currentScreen: 'ChatScreen'
      })
    })
    .catch(err => {
      console.log('there was an error fetching Samus:', err)
    })
  }

  // perform conditional rendering based on status of state
  // if there is a username then return chat screen, otherwise return first screen
  render() {
    if (this.state.currentScreen === 'UserNameScreen') {
      console.log('state values', this.state)
      return <UsernameForm onSubmit={this.onUserNameSubmitted}/>
    } else if (this.state.currentScreen === 'ChatScreen') {
      console.log('state values', this.state)
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App
