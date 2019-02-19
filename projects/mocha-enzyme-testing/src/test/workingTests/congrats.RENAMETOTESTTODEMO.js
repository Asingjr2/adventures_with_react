/** testing also includes the testing of prop-types
 * adding props types that simulate existence in components
 * setupTests file in source
 * bringing in enzyme, adapter, and config from setupTests file
 */
import React from 'react';
import { shallow } from 'enzyme';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';

import Congrats from '../../WordGuessApp/Congrats';
import {findByTestAttr, checkProps} from '../testUtils';

const expect = require('chai').expect;

// creating default props that can be overridden
const defaultProps = { success: false };

/**
 * factory function to create a ShallowWrapper for the 
 * app component
 * @function setup
 * @param {object} props - some component props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps =  { ...defaultProps, ...props };
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).to.be.equal(1);
});

// text() is '' since it will not be rendered if false
test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).to.be.equal('');
});

// text() measures length of information in div
test('renders congrats message', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'component-congrats');
  expect(message.text().length).to.not.equal(0);
});

// below test replaced by testUtils function to test a prop type and existence
test('does not throw error with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
