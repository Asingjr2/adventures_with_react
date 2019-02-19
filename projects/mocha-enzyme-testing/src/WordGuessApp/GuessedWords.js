import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let content

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">PLACE YOUR GUESS</span>
    );
  } else {
    // creating content to be rendered in app condictionally
    // matching number of rows with props length attribute
    const totalGuessRows = props.guessedWords.map((
      word, index) => (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      )
    );

    content = (
      <div data-test="guessed-words">
        <h4>Submitted Guesses</h4>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            { totalGuessRows}
          </tbody>
        </table>
      </div>
    )
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
