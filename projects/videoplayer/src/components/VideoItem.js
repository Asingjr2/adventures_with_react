import React from 'react';
import './VideoItem.css'

// Added onclick event passed from paremt (videolist) and then previous parent (app).  
// Making arrow function so that function is ran only on click and works directly with passed video.
const VideoItem = ({video, onVideoSelect}) => {
  return (
  <div className="item video-item"
    onClick={() => onVideoSelect(video)}>
    <img className="ui image"
    src={video.snippet.thumbnails.medium.url} 
    alt={video.description} />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  VIDEO ITEM
  </div>
  )
}

export default VideoItem;
