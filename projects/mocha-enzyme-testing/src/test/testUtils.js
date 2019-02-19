import checkPropTypes from 'check-prop-types';

const expect = require('chai').expect;

/**
 * return ShallowWrapper containing nodes with data-test value
 * @param {ShallowWrapper} wrapper - Enzyme wrapper to search within
 * @param {*} val - value for data-test attribute for search
 * @returns { ShallowWrapper}
 */
export function findByTestAttr(wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`);
}


/**
 * checks if exisitng props matched expected type
 * @param {*} component 
 * @returns {*} test result
 * can check docs for more information
 * https://www.npmjs.com/package/check-prop-types
 */
export function checkProps(component, expectedProps) {
  const propError = checkPropTypes(
    component.propTypes, 
    expectedProps, 
    'prop', 
    component.name);
    expect(propError).to.be.undefined;
};


