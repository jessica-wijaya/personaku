import React from 'react';
// Suppose your local video file is named `myVideo.mp4` in src/assets
import myVideo from '../assets/video.mp4';

const Video = () => {
  return (
    <div className="w-full mt-10">
      <div className="aspect-w-16 aspect-h-9">
        <video 
          src={myVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full"
        >
          {/* Fallback text if browser doesn’t support the video */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
