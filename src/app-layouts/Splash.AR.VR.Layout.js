import React from 'react';
import { Row, Col } from 'antd';
import LoadingARVR from '../app-components/Loading.AR.VR';
import './layout.index.css';

const SplashARVRLayout = (props) => {
  const { isLoaded } = props;
  return (
    <Row className="vh100 ">
      <Col className="vh100 justCentAlCent" span={24}>
        <LoadingARVR isLoaded={isLoaded} />
      </Col>
    </Row>
  );
};
export default SplashARVRLayout;
