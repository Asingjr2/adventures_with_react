import React from 'react';


class TypingUsers extends React.Component {
  render() {
    if (this.props.usersWhoAreTyping.length === 0) {
      return <div></div>
    } else if (this.props.usersWhoAreTyping.length === 1) {
      return (
        <div>{this.props.usersWhoAreTyping[0]} is typing</div>
      )
    } else {
      return (
        <div>Multiple users are typing</div>
      )
    }
  }
}

export default TypingUsers;
