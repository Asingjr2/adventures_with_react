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
      <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="eight wide column">
            <button className="ui fluid button"></button>
          </div>
          <div className="eight wide column">
            <button className="ui fluid button"></button>
          </div>
        </div>

      </div>
      <div className="">

      </div>
        <h1>THIS IS MAIN APP</h1>
        <ChatScreen />
        <UsernameForm />
      </div>
    )
  };
}

export default App;
