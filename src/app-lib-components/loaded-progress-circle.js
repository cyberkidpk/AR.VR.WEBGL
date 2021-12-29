import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import './progress.css';

const LoadedProgressCircleContainer = ({ styleProps, isLoaded }) => {
  const clickMeRef = useRef();
  var temp;
  var [loader, setLoader] = useState(0);
  var [status, setStatus] = useState(isLoaded);
  useEffect(() => {
    gsap.to(clickMeRef.current, 3, { y: 10, rotationY: 180 });
    setInterval(() => {
      loader += 1;
      if (loader > 100) {
        setLoader(100);
      } else {
        temp = (status === 'visible') ? setLoader(100) : setLoader(loader);
        setStatus(temp);
      }
    }, 4000);
  }, []);
  return (
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#2ae71c',
      }}
      strokeWidth={2}
      showInfo={loader === 100}
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
