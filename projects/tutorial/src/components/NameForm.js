import React from 'react';
import './NameForm.css';

class NameForm extends React.Component {
  state = {
    first: '', 
    last: '', 
    alias: ''
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form">
          <div className="field">
            <h5>Alias passed from parent == {this.props.alias}</h5>


            <div>
              <input type="text" className="field" 
              placeholder="some strong name"
              value={this.state.first} 
              onChange={e => this.setState({first: e.target.value})} />
            </div>

            <div>
              <input type="text" className="field" 
              placeholder="will read from strong name input box"
              value={this.state.first} />
            </div>

            <button id="myButton" type="submit">{this.props.last}</button>
          </div>
        </form>
      </div>
    )
  }
}

// Passing array to set "state" since it still counts as a prop!!!!
NameForm.defaultProps = {
  last: "this button text is a default prop"
}

export default NameForm;
