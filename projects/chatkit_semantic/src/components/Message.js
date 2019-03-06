import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="item" key={this.props.index}>
        <img class="ui avatar image" src="https://d1ia71hq4oe7pn.cloudfront.net/og/75335251-1200px.jpg" />
        <div class="content">
          <a class="header">{this.props.messageCreator}</a>
          <div class="description">{this.props.messageText}</div>
        </div>
      </div>
    )
  }


}

export default Message;
