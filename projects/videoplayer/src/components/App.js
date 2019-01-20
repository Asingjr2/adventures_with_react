import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = { videos: [], selectedVideo: null};
  
  // Giving default display item by using search function with value to set defualt.
  componentDidMount() {
    this.onSearch('sohn lesson')
  }

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

    // Below setState ensures that something is displayed on search.
    this.setState({
      videos: searchResponse.data.items,
      selectedVideo: searchResponse.data.items[0]
    })
  }

  onVideoSelect = video => {
    console.log('From the App', video);

    this.setState({ selectedVideo: video});
  }

  // Updated below with videoDetail that will display selectedVideo info from state.
  render() {
    return (
    <div className="ui cointainer">
      <SearchBar onFormSubmit={this.onSearch}/>

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos}
            onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
 
export default App;
