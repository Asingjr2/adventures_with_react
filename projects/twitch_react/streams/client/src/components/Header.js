import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/">TWITTER REACT</Link>
        <div className="right menu">
          <Link to="/">ALL STREAMS</Link>
        </div>
      </div>
    );
  }
}

export default Header;
