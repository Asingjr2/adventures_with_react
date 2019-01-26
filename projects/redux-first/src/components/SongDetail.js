import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if (!song) {
    return <div>Please select a song to play</div>
  }
    return (
      <div>
        <h2>YOU SELECTED:
        <br/>
        {song.title}
        <br/>
        {song.duration}
        </h2>
      </div>
    )
}

/** Created props that are currently in state. */
const mapStateToProps = state => {
  return { song: state.selectedSong } 
};


// Connect passes information in first parenthesis to props!!! 
// Is an object or other type of value is passed, it is then added to songDetail in props.

export default connect(mapStateToProps)(SongDetail);
