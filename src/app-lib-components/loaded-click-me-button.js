import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from 'antd';

const LoadedClickMeButtonContainer = () => {
  const clickMeRef = useRef();
  useEffect(() => {
    gsap.to(clickMeRef.current, { rotation: '+=360' });
  }, []);
  return (<Button type="primary" className="clickme" shape="circle" size="large" ref={clickMeRef}><h3> HIT IT. </h3><br></br>3D EXPERIENCE TAKES AROUND 4 MINS TO LOAD</Button>);
};

export default LoadedClickMeButtonContainer;
