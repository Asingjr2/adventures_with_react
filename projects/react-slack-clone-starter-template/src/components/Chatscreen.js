import React from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import TypingUsers from './TypingUsers';
import WhosOnlineList from './WhoOnlineList';
import {REACT_APP_INSTANCE_LOCATOR} from '../config';


class ChatScreen extends React.Component {
  constructor() {
    console.log('instance locator FROM CHAT', REACT_APP_INSTANCE_LOCATOR);
    super()
    this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      usersWhoAreTyping: []
    }
  }
  
  componentDidMount() {
    // creating another chatKit instance that will work with an internal authenticate route
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: REACT_APP_INSTANCE_LOCATOR,
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/auth'
      })
    });

    // error connecting with chatkit server
    // telling user to subscribe to the room.
    // adding messages to state array so they exist can can be displayed
    // returning entire manager request as a promise so error handling can be done
    // updating state elements on successful connection to room
    chatManager
    .connect()
    .then(currentUser => {
      console.log('currentUser is', currentUser);
      // updating current user
      this.setState({ currentUser})

      return currentUser.subscribeToRoom({
        roomId: 19393947,
        messageLimit: 100,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          },
          onUserStartedTyping: user => {
            this.setState({
              usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
            })
          },
          onUserStoppedTyping: user => {
            // review this method to remove people from a list
            this.setState({
              usersWhoAreTyping: this.state.usersWhoAreTyping.filter( 
                username => username !== user.name
              )
            })
          },
          // chatkit specific method that updates status
          onUserCameOnline: () => this.forceUpdate(),
          onUserWentOffline: () => this.forceUpdate(),
          onUserJoined: () => this.forceUpdate()
        }
      })
    })
      .then(currentRoom => {
        this.setState({currentRoom})
      })
      .catch(error => console.error('error with chat manager', error))
    }

    // below code will update the chat room that someone is typing
    sendTypingEvent = () => {
    this.state.currentUser
    .isTypingIn({
      roomId: this.state.currentRoom.id
    })
    .catch(error => console.error('error', error))
    }

    // creating message that will work with chatManager to emit information to users in the room
    sendMessage = (text) => {
      this.state.currentUser.sendMessage({
        roomId: this.state.currentRoom.id,
        text: text
      })
    }

  // Chatkit client sdk handles a running list of users
  render() {
    return (
      <div>
      <div>
        <TypingUsers usersWhoAreTyping={this.state.usersWhoAreTyping} />
        <SendMessageForm
         onChange={this.sendTypingEvent}
         onSubmit={this.sendMessage}/>
      </div>
      <div >
        <h1>WHOS ONLINE</h1>
        <WhosOnlineList users={this.state.currentRoom.users}/>
        <br/>
        <MessageList messages={this.state.messages} />
      </div>
      </div>
    )
  }
}

export default ChatScreen;
