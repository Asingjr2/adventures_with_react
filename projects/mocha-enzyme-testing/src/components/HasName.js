import React from 'react';

class HasName extends React.Component {
  state = {color: 'red'}

  render() {
    return (<div friends={this.props.friends} className="real">PASS PROP FRIEND IS: </div>)
  };
}; 
export default HasName;
