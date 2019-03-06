import React from 'react';


class SendMessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
  }

  // below code will update the chat room that someone is typing
  sendTypingEvent = () => {
    this.state.currentUser
    .isTypingIn({
      roomId: this.state.currentRoom.id
    })
    .catch(error => console.error('error', error))
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    });
    this.props.onChange()
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('submitting some stuff')
    this.props.onSubmit(this.state.text);
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
    )
  };
}

export default SendMessageForm;
