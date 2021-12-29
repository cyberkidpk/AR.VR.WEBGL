import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoadedClickMeButtonContainer from '../app-lib-components/loaded-click-me-button';

const LoadingARVR = (props) => {
  const { isLoaded } = props;
  return (
    <>
      <LoadingOutlined />
      <p>{isLoaded === 'L O A D I N G' ? 'L O A D I N G' : <Link to="/AR.VR.WEBGL/portfolio" activeStyle={{ color: 'blue' }}><LoadedClickMeButtonContainer /></Link> }</p>
    </>
  );
};

export default LoadingARVR;
