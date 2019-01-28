/** Component supporting login otions and links to users or posts. */
import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
      <Link to="/" className="item">RECAP</Link>
      <div className="right menu">
        <Link to="/users">USERS</Link>
        <Link to="/posts">POSTS</Link>
      </div>
    </div>
    )
  };
};

export default Header;
