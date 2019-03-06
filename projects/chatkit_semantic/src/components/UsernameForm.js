import React from 'react';


class UsernameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    };
  }

  onChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <div>
      <form action="" onSubmit={this.onSubmit}>
        <input type="text" placeholder="What is your name?" onChange={this.onChange}/>
        <input type="submit" />
      </form>
      </div>
    );
  };
}

export default UsernameForm;
