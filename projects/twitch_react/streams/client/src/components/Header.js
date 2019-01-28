import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">TWITTER REACT</Link>
        <div className="right menu">
          <Link to="/">ALL STREAMS</Link>
          <GoogleAuth className="item"></GoogleAuth>
        </div>
      </div>
    );
  }
}

export default Header;
