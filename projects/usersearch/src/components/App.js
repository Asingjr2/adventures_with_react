import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  // Initializing array so we can call specific functions..i.e. '.length'.
  state = { images: [] };
 
  // Using other version since its less code.
  // onSearchSubmit(term) {
  //   console.log(term);

  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term},
  //     headers: {
  //       Authorization: 'Client-ID <YOUR SPLASH ACCESS ID>'
  //     }
  //   }).then((resp) => {
  //     console.log(resp.data.results)
  //   });
  // }

   
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
      params: { query: term},
    });
    
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <h1>APP</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        FOUND : { this.state.images.length } IMAGES
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App

