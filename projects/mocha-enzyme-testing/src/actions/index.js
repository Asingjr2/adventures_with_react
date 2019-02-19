const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

// using default return
function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS
  };
}

module.exports = {
  actionTypes, correctGuess
}
