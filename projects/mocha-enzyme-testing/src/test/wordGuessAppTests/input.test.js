/** 
 * testing includes difference between using connected store using dive() to go beyond to level
 * component.
 */
import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, storeFactory} from '../testUtils';
import Input from '../../WordGuessApp/Input';

const expect = require('chai').expect;

/**
 * setup simulates state that would be passed to store
 * and logs initial returned information from wrapper
 * will pass store for each test to simulate store like in app
 * dive() goes one level deeper in component
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  console.log(wrapper.debug());
  return wrapper;
};

setup();
console.log('hey samus')

describe('rendering', () => {

  /** setting wrapper and initialState for reuse */
  describe('no word submitted', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { successs: false };
      wrapper = setup(initialState);
    });

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).to.be.equal(1);
    });
    
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).to.be.equal(1);
    });
    
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).to.be.equal(1);
    });
  });

//   describe('word submitted', () => {
//     test('renders without error', () => {
      
//     });
    
    
//     test('does not render input box', () => {
      
//     });
    
//     test('does not render submit button', () => {
      
//     });
//   });
// });

describe('state changes', () => {
  test('', () => {

  });

  test('', () => {

  });
});
})
