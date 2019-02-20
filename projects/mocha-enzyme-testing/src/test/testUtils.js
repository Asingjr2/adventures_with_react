import { createStore } from 'redux';
import checkPropTypes from 'check-prop-types';
import {expect} from 'chai';

import rootReducer from '../reducers';

// const {createStore} = require('redux');
// const checkPropTypes = require('check-prop-types');
// const expect = require('chai').expect;

// const rootReducer = require('../reducers');

console.log(typeof rootReducer);


/**
 * storeFactory simulates store that can be passed in redux
 */
function storeFactory(initialState) {
  return createStore(rootReducer, initialState)
};

/**
 * return ShallowWrapper containing nodes with data-test value
 * @function
 * @param {ShallowWrapper} wrapper - Enzyme wrapper to search within
 * @param {*} val - value for data-test attribute for search
 * @returns { ShallowWrapper}
 */
function findByTestAttr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * checks if exisitng props matched expected type
 * @param {*} component 
 * @returns {*} test result
 * can check docs for more information
 * https://www.npmjs.com/package/check-prop-types
 */
function checkProps(component, expectedProps) {
  const propError = checkPropTypes(
    component.propTypes, 
    expectedProps, 
    'prop', 
    component.name);
    expect(propError).to.be.undefined;
};

module.exports = {
  findByTestAttr, checkProps, storeFactory
}


