import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './testUtils';

import GuessedWords from '../WordGuessApp/GuessedWords';

const expect = require('chai').expect;

// will hold words guessed by user and letter matches
const defaultProps = {
  guessedWords: [
    { guessedWord: '90', letterMatchCount: 3}
  ]
};

/**
 * setup() establishes base props to use and updates
 * with any manually passed props
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}

// using testUtils function
test('does not throw error with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});


describe('if no guesses have been made', () => {
  let wrapper;
  beforeEach(() => {
    // overidding default props to make guessedWords array empty
    wrapper = setup({ guessedWords: [] });
  }); 

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).to.be.equal(1);
  });

  /**
   * checking to make sure lenh of instructions text is not null
   * and that node exists
   */ 
  test('renders instructions for user', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).to.not.equal(0);
  });
});

describe('if guesses have been made', () => {

});
