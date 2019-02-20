import React from 'react';
import {connect} from 'react-redux';

class Input extends React.Component {
  render() {
    const content = this.props.success
    ? null
    : (
      <form className="form-inline">
        <input data-test="input-box" 
        className="mb-2 mx-sm-3"
        id="word-guess"
        placeholder="enter your guess" />

        <button data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2">
            Submit Your Guess
          </button>
      
      </form>
    )
    
    return (

      <div data-test="component-input">
      {content}
    </div>
      )
  }
};

//  destructuring success from props
const mapStateToProps = ({success}) => {
  return {success};
};

export default connect(mapStateToProps) (Input);