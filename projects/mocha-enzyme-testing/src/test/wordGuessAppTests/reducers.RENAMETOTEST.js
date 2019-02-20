 // test state changes and values
import { actionTypes } from '../../actions';
import successReducer from '../../reducers/successReducer';

const expect = require('chai').expect;

// when you test state you need to pass an object for an action and initial state for state
test('returns default initial state of false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).to.be.equal(false);
});

test('returns changes state when an action occurs', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  expect(newState).to.be.equal(true);
});
