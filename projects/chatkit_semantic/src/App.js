import React from 'react';
import UsernameForm from './components/UsernameForm';
import ChatScreen from './components/ChatScreen';


class App extends React.Component {
  state = {
    currentScreen: 'UserNameScreen',
    currentUsername: ''
  }
 
  render() {
    return (
      <div>
        <h1>THIS IS MAIN APP</h1>
        <ChatScreen />
        <UsernameForm />
      </div>
    )
  };
}

export default App;
