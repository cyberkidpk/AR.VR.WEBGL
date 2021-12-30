import React from 'react';
import BackgroundVideo from '../app-lib-components/background.video';
// import EyeProjector from '../app-lib-components/loaded-eye-projector';
import ThreeDModelPlaceHolderARVR from './ThreeD.Model.PlaceHolder';
import BGVid from '../assets/video/AR.VR.2021.Future.VBG.mp4';
import BGAud from '../assets/audio/AR.VR.2021.Delusion32.mp3';

const PortfolioARVR = () => {
  const arvrProps = {
    videoSource: BGVid,
    audioSource: BGAud,
  };
  return (
    <BackgroundVideo arvrProps={{ ...arvrProps }}>
      <ThreeDModelPlaceHolderARVR />
    </BackgroundVideo>
  );
};
export default PortfolioARVR;
