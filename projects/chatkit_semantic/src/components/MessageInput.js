import React from 'react';


class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      text: ''
    };
  }

  /** update state text element when input is altered */
  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });

    this.props.onChange();
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  onUserTypingEvent = () => {
    this.state.currentUser
    .isTypingIn({
      roomId: this.state.currentRoom.id
    })
    .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
      <h3>MESSAGE TEXT ENTRY FORM</h3>
      <form action="" onSubmit={this.onSubmit}>
        <input type="text" placeholder="What is your text?" onChange={this.onChange}/>
        <input type="submit" />HEY
      </form>
      </div>
    );
  };
}

export default MessageInput;
