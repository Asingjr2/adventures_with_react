/**
 * test state changes and values
 * uses deep equal comparison to handle object comparison in state
 */ 
const correctGuess = require('../../actions').correctGuess;
const actionTypes = require('../../actions').actionTypes;

const expect = require('chai').expect;

console.log('testing actions');

describe('correctGuess', () => {
  // can compare elements of objects with deep vs shallow
  test('returns and action with type CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).to.deep.equal({ type: actionTypes.CORRECT_GUESS })
  })
});
