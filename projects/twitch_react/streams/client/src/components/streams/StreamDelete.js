import React from 'react';
import {connect} from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import {fetchSingleStreamAction, deleteStreamAction} from '../../actions';
import {Link} from 'react-router-dom';


/** 
 * passing in props to modal for easy reuse
 * introducing react fragment to handle separate elements
 * can use react.fragment or use <> </>*/
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStreamAction(this.props.match.params.id)
  }

  renderActions() {
    const id = this.props.match.params.id;
    /** passing below JSX as a prop */
    // delete button should invoke action creator
    // passing delete stream as arrow function so we can invoke with specific id
    return (
      <React.Fragment>
      <button onClick={() => this.props.deleteStreamAction(id)} 
      className="ui button negative">Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </React.Fragment>
    );
  };

  // render delete message, or delete message with title name when loaded
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream"
    }

    return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
  };

  render() {
    return (
      <Modal  
        title="Delete Stream" 
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}

      />
      )
    };
};

/**
 * including ownProps to grab id from url so that we can display some information about the object 
 */
let mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
};

// connect method takes state to props as well as any actions so because we are passing this object in we can can use it in the component.
// added stream from mapStateToProps function
export default connect(mapStateToProps, {fetchSingleStreamAction, deleteStreamAction})(StreamDelete);
