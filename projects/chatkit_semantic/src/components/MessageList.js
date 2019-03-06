import React from 'react';
import Message from './Message';


class MessageList extends React.Component {
  render() {
    return (
      <div className="ui list">
        {this.props.messages.map((message, index) => (
          <Message key={index}
          messageText={message.text}
          messageCreator={message.senderId} />
        ))}
      </div>
    );
  };
}

export default MessageList;
