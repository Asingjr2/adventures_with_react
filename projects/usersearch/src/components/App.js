import React from 'react';
import SearchBar from './SearchBar';

// const App = () => {
//   return (
//   <div className="ui container" style={{ marginTop: '10px'}}>
//     <h1>
//       APP
//     </h1>
//     <SearchBar  testName="Joe Blow" />
//   </div>)
// };

class App extends React.Component {
  // Returns submitted search term from submit component {
    onSearchSubmit(term) {
      console.log(term);
    }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <h1>APP</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App

