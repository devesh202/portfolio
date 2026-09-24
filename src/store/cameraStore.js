import { create } from 'zustand';
import * as THREE from 'three';

const useCameraStore = create((set) => ({
  targetPosition: new THREE.Vector3(0, 0, 5), // Default hero position
  targetRotation: new THREE.Euler(0, 0, 0), // Default hero rotation
  setCameraState: (position, rotation) => 
    set({
      targetPosition: position,
      targetRotation: rotation
    }),
}));

export default useCameraStore;
