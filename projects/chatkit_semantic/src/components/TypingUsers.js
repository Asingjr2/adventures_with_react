import React from 'react';


class TypingUsers extends React.Component {
  render() {
    if (this.props.usersTypingList.length === 0) {
      return <div></div>
    } else if (this.props.usersTypingList.length === 1) {
      return (
        <div>{this.props.usersTypingList[0]} is typing</div>
      )
    } else {
      return (
        <div>Multiple users are typing</div>
      )
    }
  }
}

export default TypingUsers;
