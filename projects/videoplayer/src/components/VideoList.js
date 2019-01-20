import React from 'react';
import VideoItem from './VideoItem';

// Do not use 'this' with function based component...only for class.
// Line below is same as next but without porps since ES6 allows for destructuring.
// const VideoList = props => {
  //   return (
  //   <div>MY VIDEOLIST {props.videos.length}</div>
  //   )
  // }
  // Passing video to be rendered in the videoItem component.
  // Can destrcutrue out function as well then adding to videoItem to pass down.
  //   Adding styling for grids and columns using semantic.
  const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map( (video) => {
      return <VideoItem video={video}  
      onVideoSelect={onVideoSelect} 
      key={video.id.videoId} />
    });
  
  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
