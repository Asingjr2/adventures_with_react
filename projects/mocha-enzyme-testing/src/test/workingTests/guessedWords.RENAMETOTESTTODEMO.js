import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../testUtils';

import GuessedWords from '../../WordGuessApp/GuessedWords';

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

// works
// describe('if no guesses have been made', () => {
//   let wrapper;
//   beforeEach(() => {
//     // overidding default props to make guessedWords array empty
//     wrapper = setup({ guessedWords: [] });
//   }); 

//   test('renders without error', () => {
//     const component = findByTestAttr(wrapper, 'component-guessed-words');
//     expect(component.length).to.be.equal(1);
//   });

//   /**
//    * checking to make sure lenh of instructions text is not null
//    * and that node exists
//    */ 
//   test('renders instructions for user', () => {
//     const instructions = findByTestAttr(wrapper, 'guess-instructions');
//     expect(instructions.text().length).to.not.equal(0);
//   });
// });

// works
// describe('if guesses have been made', () => {
//   let wrapper;
//   const guessedWords = [
//     { guessedWord: 'train', letterMatchCount: 3},
//     { guessedWord: 'bag', letterMatchCount: 1},
//     { guessedWord: 'party', letterMatchCount: 5}
//   ];

//   beforeEach(() => {
//     wrapper = setup({ guessedWords });
//   });

//   test('renders without error', () => {
//     const component = findByTestAttr(wrapper, 'component-guessed-words');
//     expect(component.length).to.be.equal(1);
//   });

//   // confirming that div renders if there are guessed words
//   test('renders previously guessed words', () => {
//     const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
//     expect(guessedWordsDiv.length).to.be.equal(1);
//   });

//   // comparing nodes being rendered to length of props array 
//   // since we will add a line with the guess and matching letters
//   test('renders correct number of guessed words', () => {
//     const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
//     expect(guessedWordsNodes.length).to.not.equal(0);
//     expect(guessedWordsNodes.length).to.be.equal(guessedWords.length);
//   });
// });
