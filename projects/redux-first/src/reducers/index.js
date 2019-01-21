// Creating reducers to update state.
import  { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Wonder Wall', duration: "4:09"}, 
    { title: 'Crash Into Me', duration: "1:49"}, 
    { title: 'Iris', duration: "6:29"}, 
    { title: 'Amazing Grace', duration: "2:09"}, 
    { title: 'Lessons', duration: "4:34"}
  ];
};

// Defaulting initial item to null.
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// Combining reducers for use throughout the app.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
