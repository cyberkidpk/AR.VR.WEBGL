import React from 'react';

const BackgroundVideo = ({ arvrProps, children }) => {
  const {
    videoSource, audioSource, blur, widthBG,
  } = arvrProps;
  return (
    <div className="container">
      {children}
      <audio
        controls
        autoPlay
        loop
        style={{
          position: 'absolute',
          top: -99999,
        }}>
        <source src={audioSource} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <video
        style={{
          filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)`, top: 0, left: 0, zIndex: 1, position: 'absolute', width: `${widthBG}px`,
        }}
        autoPlay="autoplay"
        loop="loop"
        muted
        id="futureBGVid"
        className="video">
        <source src={videoSource} type="video/mp4" />
        <span>Your browser does not support the video tag.</span>
      </video>
    </div>
  );
};

export default BackgroundVideo;
