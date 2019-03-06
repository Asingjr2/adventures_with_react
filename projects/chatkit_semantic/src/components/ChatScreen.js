import React from 'react';
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import TypingUsers from './TypingUsers';
import OnlineUsers from './OnlineUsers';
import Message from './Message';
import {REACT_APP_INSTANCE_LOCATOR} from '../config';


class ChatScreen extends React.Component {
  render() {
    return (
      <div>
        THIS IS THE CHAT SCREEN
        <MessageList />
        <MessageInput />
        <TypingUsers />
        <OnlineUsers />
        <Message />
      </div>
    );
  };
}

export default ChatScreen;
