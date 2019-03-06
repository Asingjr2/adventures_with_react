import React from 'react';


class WhosOnlineList extends React.Component {

  render() {
    if (this.props.users) {
      return (
        <ul>
          {this.props.users.map((user, index) => {
            return (
          <li>Number: {index} Name: {user.name} Presence: ({ user.presence.state})</li>
            )
          }) }
        </ul>
      )
    } else {
      return <div>LOADING...</div>
    }
  }
}

export default WhosOnlineList;
