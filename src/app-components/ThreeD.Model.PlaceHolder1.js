import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDModelPlaceHolderARVR = () => {
  var scene,
    camera,
    /* hLight,
    dLight,
    */
    geometry,
    cube,
    material,
    animate,
    renderer,
    targetDom;
  /* light1,
    light2,
    light3,
    light4,
    controls;
    */
  const threeDPlaceholderRef = useRef();
  // const sWidth = window.screen.offsetWidth;
  // const sHeight = 800;
  useEffect(() => {
    targetDom = threeDPlaceholderRef.current;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0000ff);
    camera = new THREE.PerspectiveCamera(
      75,
      targetDom.offsetWidth / targetDom.offsetHeight,
      0.1,
      1000,
    );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(targetDom.offsetWidth, targetDom.offsetHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    targetDom.appendChild(renderer.domElement);
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    console.log(scene);
    const loader = new OBJLoader();
    loader.load(

      '/assets/threeD/dobermann-3d-model/Dobermann.obj',
      (
        gltf,
      ) => {
        const group = new THREE.Group();
        console.log(gltf);
        group.add(gltf);
        scene.add(group);
        animate();
      },
      undefined,
      (
        err,
      ) => {
        console.log(err);
      },
    );

    animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
  }, []);
  return (
    <div
      ref={threeDPlaceholderRef}
      style={
        {
          width: 800, height: 800,
        }
      } />
  );
};

export default ThreeDModelPlaceHolderARVR;
