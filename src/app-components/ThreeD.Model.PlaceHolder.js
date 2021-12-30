import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import LoadedProgressCircleContainer from '../app-lib-components/loaded-progress-circle';

const ThreeDModelPlaceHolderARVR = () => {
  var scene,
    camera,
    hLight,
    dLight,
    renderer,
    targetDom,
    light1,
    light2,
    light3,
    light4,
    controls;
  var [progress, setProgress] = useState(0);
  var manager;
  // carScene = 460;
  const [isLoaded, setIsLoaded] = useState('hidden');
  const [opIsLoaded, setOpIsLoaded] = useState('visible');
  const threeDPlaceholderRef = useRef();
  // const sWidth = window.screen.offsetWidth;
  // const sHeight = 800;
  useEffect(() => {
    // carScene = 460;
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    const init = () => {
      targetDom = threeDPlaceholderRef.current;
      scene = new THREE.Scene();
      scene.background = null;
      camera = new THREE.PerspectiveCamera(
        40,
        targetDom.offsetWidth / targetDom.offsetHeight,
        1,
        5000,
      );
      camera.rotation.y = 45 / (180 * Math.PI);
      camera.rotation.x = 400;
      camera.position.y = 100;
      camera.position.z = 500;

      hLight = new THREE.AmbientLight(0xdddddd, 10);
      scene.add(hLight);
      dLight = new THREE.DirectionalLight(0xdddddd, 10);
      dLight.position.set(0, 1, 0);
      dLight.castShadow = true;
      scene.add(dLight);

      light1 = new THREE.PointLight(0xc4c4c4, 10);
      light1.position.set(0, 300, 500);
      scene.add(light1);

      light2 = new THREE.PointLight(0xc4c4c4, 10);
      light2.position.set(500, 100, 0);
      scene.add(light2);

      light3 = new THREE.PointLight(0xc4c4c4, 10);
      light3.position.set(0, 100, -500);
      scene.add(light3);

      light4 = new THREE.PointLight(0xc4c4c4, 10);
      light4.position.set(-500, 300, 0);
      scene.add(light4);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setSize(targetDom.offsetWidth, targetDom.offsetHeight);
      targetDom.appendChild(renderer.domElement);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
      manager = new THREE.LoadingManager();
      manager.onLoad = function () {
        console.log('Loading complete');
      };
      manager.onProgress = function (item, loaded, total) {
        progress = Math.round((loaded / (total * 100)) * 10000, 2);
        // console.log(item, loaded, total);
        // console.log('Loaded:', progress);
        setProgress(progress);
      };
      manager.onError = function (url) {
        console.log(url);
        console.log('Error loading');
      };
      const loader = new GLTFLoader(manager);
      loader.load(
        '/AR.VR.WEBGL/scene.gltf',
        (gltf) => {
          var mroot = gltf.scene;
          var bbox = new THREE.Box3().setFromObject(mroot);
          var cent = bbox.getCenter(new THREE.Vector3());
          var size = bbox.getSize(new THREE.Vector3());
          // Rescale the object to normalized space
          var maxAxis = Math.max(size.x, size.y, size.z);
          mroot.scale.multiplyScalar(10 * maxAxis);
          bbox.setFromObject(mroot);
          bbox.getCenter(cent);
          bbox.getSize(size);
          // Reposition to 0,halfY,0
          mroot.position.copy(cent).multiplyScalar(-1);
          mroot.position.y -= (size.y * -0.5);
          scene.add(gltf.scene);
          animate();
          setIsLoaded('visible');
          setTimeout(() => {
            setOpIsLoaded('hidden');
          }, 10000);
        },
        undefined,
        (err) => {
          console.error(err);
        },
      );
    };
    init();
  }, []);
  return (
    <div>
      <div
        style={
            {
              width: '100%',
              height: 20,
              top: 350,
              position: 'absolute',
              zIndex: 100,
              textAlign: 'center',
              visibility: `${isLoaded}`,
            }
          }>
        {
            (progress > 99.99) ? (
              <div>
                <h3 style={{ color: 'green' }}>
                  <span>
                    &lt; DRAG UP DOWN, LEFT RIGHT, PINCH, ZOOM IN ZOOM OUT  &gt; ON THE CAR MODEL
                  </span>
                </h3>
                <h5 style={{ marginTop: 30 }}>
                  <p><span style={{ color: '#d9363e' }}>React Js &amp; Concept</span></p>
                  <p><span style={{ color: '#efefef' }}>Piyush Kanungo</span></p>
                  <p><span style={{ color: '#d9363e' }}>3D Model</span></p>
                  <p><span style={{ color: '#efefef' }}><strong> Videep Mishra </strong> A Dear Friend and Amazing 3D Artist</span></p>
                </h5>
              </div>
            ) : (
              <h6 style={{ color: '#d9363e' }}>
                <span style={{ color: '#d9363e' }}>
                  &lt; {`${progress} %`} &gt;
                </span>
              </h6>
            )
          }
      </div>
      <div
        ref={threeDPlaceholderRef}
        style={
          {
            width: '100%',
            height: 460,
            position: 'absolute',
            zIndex: 100,
            visibility: `${isLoaded}`,
          }
        }
      />
      <LoadedProgressCircleContainer
        styleProps={
          {
            position: 'absolute',
            zIndex: 100,
            visibility: `${opIsLoaded}`,
          }
        }
        isLoaded={isLoaded}
        progress={progress}
      />
    </div>
  );
};

export default ThreeDModelPlaceHolderARVR;
