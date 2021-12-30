import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import './progress.css';

const LoadedProgressCircleContainer = ({ styleProps, progress }) => {
  const clickMeRef = useRef();
  var [loader, setLoader] = useState(progress);
  useEffect(() => {
    gsap.to(clickMeRef.current, 3, { y: 10, rotationY: 180 });
    setLoader(progress);
  }, [progress]);
  return (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#2ae71c',
      }}
      strokeWidth={2}
      width={300}
      style={
        {
          ...styleProps,
          top: '50%',
          left: '50%',
          marginLeft: -150,
        }
      }
      type="circle"
      ref={clickMeRef}
      percent={loader} />
  );
};

export default LoadedProgressCircleContainer;
