import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreamsAction } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreamsAction();
  };

  // checks user's signed in status to render a button
  renderCreateButton () {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">
            CREATE STREAM
          </Link>
        </div>
      )
    }
  }

  // renders button to edit stream information if created by currentUser
  renderEditButton = (stream) => {
    if (stream.userId === this.props.currentUserID) {
      return (
        <div className="right floated content">
            <Link to={`/streams/edit/${stream.id}`}
            className="ui button primary">EDIT</Link>
            <Link to={`/streams/delete/${stream.id}`}
            className="ui button negative">DELETE</Link>
        </div>
      )
    }
  }

  /**
   * renders listing of all streams in state
   * Location of renderEdit button required for correct syling with sem
   */
  renderList() {
    return this.props.streams.map( stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderEditButton(stream)}
          <i className="large middle algined icon camera"></i>
          <Link to={`/streams/${stream.id}`}
          className="header">
            {stream.title}
          </Link>
          <div className="content">
          <div className="description"> 
            {stream.description}</div>
            <div></div>
         </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>STREAMS</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreateButton()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  // converting array object items to array and passing current userID informtion
  return {
    streams: Object.values(state.streams),
    currentUserID: state.auth.userId,
    isSignedIn: state.auth.loggedIn
  };
};

// passing fetchSteams action to component
export default connect(mapStateToProps, { fetchStreamsAction })(StreamList);
