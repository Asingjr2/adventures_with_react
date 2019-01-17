import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  state = {term: '', testName: ''};

  printHello() {
    console.log("hey friend")
  }

  componentDidUpdate() {
    console.log("Updating component")
  }
  
  // Four input commands listed
  // First reacts to function
  // Second reacts to event
  // Third reacts to event and updates state to fast to notice
  // Forth reads the update stated value and populates screen based on changes.
  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onClick={this.printHello}>
          <div className="field">
            <h1>{this.props.testName}</h1>
            <label htmlFor="">Image Search</label>
            <input type="text" className="field" placeHolder="You are awesome" onChange={this.onInputChange}/>
            <input type="text" className="field" onChange={e => console.log(e.target.value)}/>
            <input type="text" className="field" 
            value={this.state.term} 
            onChange={e => this.setState({term: e.target.value})} />
            <input type="text" className="field" value={this.state.term}  />
          </div>
        </form>
      </div>
    )
  }
}


// Adding to test if you can add default with only one prop.
SearchBar.defaultProps = {
  testName : "Loading your perfect scene..."
}

export default SearchBar
