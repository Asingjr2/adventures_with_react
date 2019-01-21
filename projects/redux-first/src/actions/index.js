// When you label file index.js you can export easier.
// Action creator file to handle song selection.
// Export in front of item allows for specific function.

// This is an action creator.
export const selectSong = (song) => {
  // Return action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
