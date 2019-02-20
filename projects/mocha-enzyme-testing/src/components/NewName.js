import React from 'react';

class NewName extends React.Component {

  state = {color: 'red', count: 1}
  componentDidMount() {
    console.log(this.props.friend);
  }

  render() {
    return (<div className="real">PASS PROP FRIEND IS: {this.props.friend}</div>)
  };
};
export default NewName;
