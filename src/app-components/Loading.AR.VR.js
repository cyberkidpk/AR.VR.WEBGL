import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LoadedClickMeButtonContainer from '../app-lib-components/loaded-click-me-button';

const LoadingARVR = (props) => {
  const { isLoaded } = props;
  return (
    <div>
      <p>{isLoaded === 'L O A D I N G' ? <LoadingOutlined /> : <Link to="/portfolio" activeStyle={{ color: 'blue' }}><LoadedClickMeButtonContainer /></Link> }</p>
    </div>
  );
};

export default LoadingARVR;
