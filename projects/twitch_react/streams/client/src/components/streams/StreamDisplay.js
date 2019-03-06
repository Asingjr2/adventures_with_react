import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleStreamAction} from '../../actions';
// flv works to convert data to be used with html player
import flv from 'flv.js';


class StreamDisplay extends React.Component {
  constructor(props) {
    super(props);

    const {id} = this.props.match.params
    
    console.log('constructor trying to grab stream')
    this.props.fetchSingleStreamAction(id);

    this.videoRef = React.createRef();
  };

  // only called once, so we need to call build player any time the component updates.
  componentDidMount() {
    // destructuring to grab id from params object
    const {id} = this.props.match.params

    this.props.fetchSingleStreamAction(id);

    // calling player since the stream would have been created from async call
    this.createPlayer();
  };

  // we try to build player on creation, however, if the stream is still not fetch we call player once its updated...which will occur once stream is fetched async
  componentDidUpdate() {
    console.log('component updated');
    this.createPlayer();
  }
  // way to clean up resources like the player created with flv and it will stop working to stream information.
  componentWillMount() {
    this.player.destroy();
  }

  // helper method being created to create player instance where the display page is reloaded, or we are waiting to fetch id async
  createPlayer()  {
    if (this.player || !this.props.stream) {
      console.log('no stream yet')
      return;
    }

    const {id} = this.props.match.params
    // creating instance of player
    // important to know that until the stream is fetched we should not try to attach to video ref
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });

    // attached video to specific element of dom
    this.player.attachMediaElement(this.videoRef.current);
    // loading the video instead of playing automatically
    this.player.load();
  };
  
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    const {title, description} = this.props.stream;
    
    // creating red to access an element on in the Dom
    // also assigned controls to video which is the same as controls={true}
    return (
    <div>
      <video ref={this.videoRef}
      style={{ width: '100%' }}
      controls></video>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchSingleStreamAction})(StreamDisplay);
