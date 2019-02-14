import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  componentDidMount() {
    console.log('before i send axios')

    // test hubspot code
    axios.post('https://api.hubapi.com/contacts/v1/contact', {
      params: { hapikey: 'b9716724-9b0a-40e7-8e5c-1215e89845cd',
        email: 'test@hubspot.com',
        firstname: 'some first',
        lastname: 'somelast',
        favorite_currencies: 'BTC FOREVER'
      }
    }).then((resp) => {
      console.log(resp.data.results)
    });
  }
  // Returns submitted search term from submit component 
  // axios takes endpoint as string.
  // Replace below with access key for api to work.
  // Function takes second arguement of headers for request.
  // Term is taken from submitted form and entered as param.
  // Axios returns a promise which we then work with using 'then()'.
  // Can handle ajax request in two ways....
  onSearchSubmit(term) {
    console.log(term);

    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID <YOUR ACCESS CODE>'
      }
    }).then((resp) => {
      console.log(resp.data.results)
    });

    // test hubspot code
    axios.post('https://api.hubapi.com/contacts/v1/contact', {
      params: { hapikey: 'b9716724-9b0a-40e7-8e5c-1215e89845cd',
        email: 'test@hubspot.com',
        firstname: 'some first',
        lastname: 'somelast',
        favorite_currencies: 'BTC FOREVER'
      }
    }).then((resp) => {
      console.log(resp.data.results)
    });
  }

  async onSearchSubmit2(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID <YOUR UNSPLASH ACCESS CODE>'
      }
    });
    console.log(response.data.results)
  }

  // Can sub out the onSubmit function between version 1 and version 2.  Both work.
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}} >
        <h1>APP</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App

