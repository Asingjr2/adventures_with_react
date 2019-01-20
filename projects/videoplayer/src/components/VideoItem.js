import React from 'react';
import '.VideoItem'

const VideoItem = ({video}) => {
  return (
  <div className="item">
    <img className="ui image"
    src={video.snippet.thumbnails.medium.url} 
    alt={video.description} />
    <div className="content">
      <a href="" className="header">{video.snippet.title}</a>
    </div>
  VIDEO ITEM
  </div>
  )
}

export default VideoItem;
