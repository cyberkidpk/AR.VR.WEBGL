import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DingtalkCircleFilled } from '@ant-design/icons';

const EyeProjector = ({ styleProps, setY }) => {
  const digitalTalkRef = useRef();
  useEffect(() => {
    gsap.to(digitalTalkRef.current, 4, { y: setY, rotationY: 180 });
  }, []);
  return (<DingtalkCircleFilled style={{ ...styleProps }} ref={digitalTalkRef} />);
};

export default EyeProjector;
