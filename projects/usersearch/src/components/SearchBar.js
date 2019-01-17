import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  printHello() {
    console.log("hey friend")
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onClick={this.printHello}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" className="field" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar