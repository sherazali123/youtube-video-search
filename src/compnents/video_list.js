import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos }) => {
  const listItems = videos.map(video => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return <ul className="col-md-4 list-group">{listItems}</ul>;
};

export default VideoList;
