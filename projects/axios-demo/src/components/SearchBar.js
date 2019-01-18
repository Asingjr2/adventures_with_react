import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};
  
  onFormSubmit = (e) => {
    e.preventDefault();

    // Using function passed down from app.
    // Passing in state value which will be taken from user from input.
    this.props.onSubmit(this.state.term);
  }
  
  // Creating controlled element that reacts based on state value.
  // State 'term' is updated when type, but the component is reloaded so fast its unnoticable.
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" 
              value={this.state.term} 
              onChange={e => this.setState({term: e.target.value})} 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
