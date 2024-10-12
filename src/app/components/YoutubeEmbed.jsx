import React from 'react';

const YouTubeEmbed = () => {
  return (
<div className="video-container">
      <video width="600" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default YouTubeEmbed;