import React from 'react';
import { connect } from 'react-redux';

import { fetchSingleStreamAction } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    console.log('id from url', this.props.match.params.id)
    this.props.fetchSingleStreamAction(this.props.match.params.id);
  };

  render() {
    if (!this.props.stream) {
      return <div> PLEASE SELECT STREAM FROM LISTING</div>

    }

    console.log('props from component', this.props);
    return <div>STREAM EDIT</div>
  }
}

/**
 * can reference props from component
 * url information passed down from router object in app
 * grabbing index because assumption is that id is in order and none have been deleted
 */
const mapStateToProps = (state, ownProps) => {
  console.log('props from map', ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSingleStreamAction } )(StreamEdit);
