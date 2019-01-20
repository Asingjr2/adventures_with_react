import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onNewInput = (e) => {
    this.setState({ term: e.target.value})
  } 

  //  Creating function as an arrow to support binding to specific class versus child element as it is being passed down.
  onFormSubmit = (e) => {
    e.preventDefault();

    // Calling function that was passed down from parent..passing term..
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
    <div className="seach-bar ui segment ">SEARCHBAR
    <form 
    onSubmit={this.onFormSubmit} 
    className="ui form">
      <div className="field">
        <label>SEARCH FOR VIDEOS</label>
        <input 
        onChange={ this.onNewInput}
        type="text"
        value={this.state.term} />
      </div>
    </form></div>


    )
  }
}

export default SearchBar;
