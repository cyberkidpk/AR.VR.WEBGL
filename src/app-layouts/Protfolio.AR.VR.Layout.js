import React from 'react';
import { Row, Col } from 'antd';
import './layout.index.css';
import PortfolioARVR from '../app-components/Portfolio.AR.VR';
import BGVid from '../assets/video/AR.VR.2021.Future.VBG.mp4';
import BGAud from '../assets/audio/AR.VR.2021.Delusion32.mp3';

const ProfolioARVRLayout = () => {
  const bgVidProps = {
    videoSource: BGVid,
    audioSource: BGAud,
    blur: 0,
  };
  return (
    <Row className="vh100 ">
      <Col className="vh100" span={24}>
        <PortfolioARVR arvrProps={{ ...bgVidProps }} />
      </Col>
    </Row>
  );
};
export default ProfolioARVRLayout;
