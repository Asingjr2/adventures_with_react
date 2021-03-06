// all tests work...can change name to test.js to demo
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CounterApp from '../../CounterApp/CounterApp';

const expect = require('chai').expect;

Enzyme.configure({ adapter: new Adapter() });

/**
 * factory function to create a ShallowWrapper for the 
 * app component
 * @function setup
 * @param {object} props - some component props
 * @param {object} state - state
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<CounterApp {...props} />)
  if (state) wrapper.setState(state);
  return wrapper
}

/**
 * return ShallowWrapper containing nodes with data-test value
 * @param {ShallowWrapper} wrapper - Enzyme wrapper to search within
 * @param {*} val - value for data-test attribute for search
 * @returns { ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).to.be.equal(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).to.be.equal(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).to.be.equal(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).to.be.equal(0);
});

test('button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  
  // simulate button click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  // simulating the re-rendering component
  wrapper.update();
  
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  const newCounter = counter + 1;
  // using text() feature to get information from component rendering
  expect(counterDisplay.text()).contains(newCounter);

});

test('button decrements counter', () => {
  const counter = 5;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  const newCounter = counter -1;
  expect(counterDisplay.text()).contains(newCounter);
});
