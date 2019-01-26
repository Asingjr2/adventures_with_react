import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID);
    console.log('printing userID', this.props.userID)
  }

  
  render() {
    const { user } = this.props;

    if (!user) {
      return 'Unknown';
    }

    return <div className="header">Author: {user.name}</div>
  }
};

/** ownProps is reference to this.props */
const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userID) }
}

/**
 * Below creates prop object for component using state elements.
 * Below also passes imported function into component.
 */
export default connect(
  mapStateToProps, 
  { fetchUser: fetchUser}) (UserHeader)
