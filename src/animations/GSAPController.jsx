import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useCameraStore from '../store/cameraStore';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

const GSAPController = () => {
  const setCameraState = useCameraStore((state) => state.setCameraState);

  useEffect(() => {
    // We create an invisible proxy object to animate with GSAP, 
    // and onUpdate we pass its values to the Zustand store.
    const cameraProxy = {
      x: 0,
      y: 0,
      z: 5,
      rx: 0,
      ry: 0,
      rz: 0
    };

    const updateCameraStore = () => {
      setCameraState(
        new THREE.Vector3(cameraProxy.x, cameraProxy.y, cameraProxy.z),
        new THREE.Euler(cameraProxy.rx, cameraProxy.ry, cameraProxy.rz)
      );
    };

    // Hero -> Projects
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      onUpdate: (self) => {
        // Interpolate manually based on progress for maximum control within the trigger
        cameraProxy.x = gsap.utils.interpolate(0, 0, self.progress);
        cameraProxy.y = gsap.utils.interpolate(0, -10, self.progress);
        cameraProxy.z = gsap.utils.interpolate(5, 8, self.progress);
        cameraProxy.rx = gsap.utils.interpolate(0, -0.2, self.progress);
        
        updateCameraStore();
      }
    });

    // Projects -> Skills
    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      onUpdate: (self) => {
        cameraProxy.x = gsap.utils.interpolate(0, 10, self.progress);
        cameraProxy.y = gsap.utils.interpolate(-10, -20, self.progress);
        cameraProxy.z = gsap.utils.interpolate(8, 6, self.progress);
        cameraProxy.rx = gsap.utils.interpolate(-0.2, 0.1, self.progress);
        cameraProxy.ry = gsap.utils.interpolate(0, 0.5, self.progress);
        
        updateCameraStore();
      }
    });

    // Skills -> Experience (Optional, restoring camera if needed, or looking away)
     ScrollTrigger.create({
      trigger: '#experience',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      onUpdate: (self) => {
        cameraProxy.x = gsap.utils.interpolate(10, -5, self.progress);
        cameraProxy.y = gsap.utils.interpolate(-20, -30, self.progress);
        cameraProxy.z = gsap.utils.interpolate(6, 10, self.progress);
        cameraProxy.ry = gsap.utils.interpolate(0.5, -0.3, self.progress);
        
        updateCameraStore();
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setCameraState]);

  return null;
};

export default GSAPController;
