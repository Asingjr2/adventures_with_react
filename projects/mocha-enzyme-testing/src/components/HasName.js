import React from 'react';

class HasName extends React.Component {

  state = {color: 'red'}
  componentDidMount() {
    console.log(this.props.friend);
  }

  render() {
    return (<div className="real">PASS PROP FRIEND IS: {this.props.friend}</div>)
  };
};
export default HasName;
