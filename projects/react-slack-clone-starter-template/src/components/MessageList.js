import React from 'react';


class MessageList extends React.Component {
 
  // illustrating list by using map to work through array of messages
  // portraying message information by grabbing out text from message object
  render() {
    return (
      <ul>
        {this.props.messages.map((message, index) => (
          <li key={index}>
          <div>
            <span>{message.senderId}</span>
            <p>{message.text}</p>
          </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default MessageList;
