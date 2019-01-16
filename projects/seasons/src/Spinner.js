import React from 'react';
import './Spinner.css'

const Spinner = props => {
  return (
    <div class="ui big segment">
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
    </div>
  )
}

// Creating default prop for use with the component.
Spinner.defaultProps = {
  message : "Loading your perfect scene..."
}
export default Spinner;
