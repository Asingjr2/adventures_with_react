import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let content

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">PLACE YOUR GUESS</span>
    );
  } 

  return (
    <div data-test="component-guessed-words">
      { content }  
    </div>
  );
};

// creating a required array of a shape that contains elements that are required
GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default GuessedWords;
