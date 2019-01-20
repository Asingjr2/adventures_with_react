import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>LOADING.......</div>;
  }

  // Creating list based on individual video id.
  const videoLink = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoLink} title="video-player" frameBorder="2"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;
