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
  const VideoList = ({ videos }) => {
    const renderedList = videos.map( (video) => {
      return <VideoItem video={video} />
    });
  
  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
