import React from 'react';
import { connect } from 'react-redux';
/** Import action craetor. */
import { selectSong } from '../actions';

class SongList extends React.Component {
  
  
  /** Using song title as key since they are unique. */
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
            onClick={() => this.props.selectSong(song)}>START SONG</button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  
  render() {
    /** Props passed through connect function (as state originally). */
    console.log('printing props from render', this.props)

    return <div className="ui divided list">{this.renderList()}</div>
    };
};



/** Common function name below to attached state to function. */
// const mapStateToProps = (state) => {
//   console.log(state);

//   return state;
// }

/** Pulling songs state off of higher level redux store(Provider) to get into this component specifically.  */
/** Alternative to passing down state. */
const mapStateToProps = state => {
  // Checking to see if selectedSong is updated in state.  Initial call will show initial state when component is loaded.
  console.log('printing state from mapStateToProps', state)
  return { songs: state.songs };
}

/** 
 * Connecting this function to the top level provider.
 * Specialist syntax returns function.
 * Configured by passing function.
 * Bringing in action creator which will work with dispatch from store in provider which is connected with the connect function!!!.
 * Action creator now becomes a prop.
 */
export default connect(mapStateToProps, {
  selectSong: selectSong
}) (SongList);


/** 
 * Important distinction is that in this component the state is the same (an array and a song value or null value)
 * while props contains an array and a function)!!
 */ 
