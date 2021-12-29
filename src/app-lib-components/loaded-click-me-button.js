import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const LoadedClickMeButtonContainer = () => {
  const clickMeRef = useRef();
  useEffect(() => {
    gsap.to(clickMeRef.current, { rotation: '+=360' });
  }, []);
  return (
    <Button type="primary" className="clickme" size="large" ref={clickMeRef}>
      <h3>
        <p>HIT IT.</p>
        <p style={{ fontSize: 12, color: '#666' }}>3D EXPERIENCE TAKES AROUND 4 MINS TO LOAD</p>
      </h3>
    </Button>
  );
};

export default LoadedClickMeButtonContainer;
