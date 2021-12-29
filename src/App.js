import React, { useEffect, useState } from 'react';
import './App.css';
import SplashARVRLayout from './app-layouts/Splash.AR.VR.Layout';

const App = () => {
  const [isLoaded, setIsLoaded] = useState('L O A D I N G');
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded('L O A D E D... CLICK HERE');
    }, 3500);
  }, []);
  return (
    <div className="App">
      <SplashARVRLayout isLoaded={isLoaded} />
    </div>
  );
};

export default App;
