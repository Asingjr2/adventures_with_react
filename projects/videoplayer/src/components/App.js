import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };
  
  onSearch = async term => {
    console.log(term);

    // calling module name with get method to initiate axios request with url add on and params.
    const searchResponse = await youtube.get('search', {
      params: {
        q: term
      }
    });


    // Logging entire response item.
    console.log(searchResponse)

    this.setState({
      videos: searchResponse.data.items
    })
  }


  render() {
    return (
    <div className="ui cointainer">
      <SearchBar onFormSubmit={this.onSearch}/>
      <h1>VIDEO RESULTS : { this.state.videos.length }</h1>
      <VideoList videos={this.state.videos} />
    </div>
    )
  }
}
 
export default App;
