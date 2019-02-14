import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchSingleStreamAction, updateStreamAction } from '../../actions';
import StreamForm from './SteamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    console.log('id from url', this.props.match.params.id)
    this.props.fetchSingleStreamAction(this.props.match.params.id);
  };

  onSubmit = (formValues) => {
    console.log(formValues);

    // calling reducer to send put request to update form value
    this.props.updateStreamAction(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div> PLEASE SELECT STREAM FROM LISTING</div>

    }

    /**
     * initialValues must match input name
     * also using a lodash method that allows us to grab 
     * specific object values
     */
    return (
      <div>
        <h3>EDIT STREAM</h3>
        <StreamForm 
        initialValues={ _.pick(this.props.stream, 'title', 'description')}
        onSubmit={this.onSubmit} />
      </div>
    )
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

  export default connect(mapStateToProps, { fetchSingleStreamAction,
  updateStreamAction }
  ) (StreamEdit);
