import React from 'react';
import PropTypes from 'prop-types';

/**
 * component to present successful guess message
 * @function
 * @params {object} props - React props
 * @returns {JSX.Eleent} - renders success message or null if not successful 
 */
const Congrats = (props) => {
    if (props.success) {
      return (
        <div data-test="component-congrats">
          <span data-test="congrats-message">WELL DONE
          </span>
        </div>
        );
      } else {
        return (
          <div data-test="component-congrats"></div>
        );
      }
  };


/**
* if we add isRequired we will get warning
* is isRequired is not passed
*/
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;
