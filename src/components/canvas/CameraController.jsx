import { useFrame } from '@react-three/fiber';
import useCameraStore from '../../store/cameraStore';
import * as THREE from 'three';

const CameraController = () => {
  const targetPosition = useCameraStore((state) => state.targetPosition);
  const targetRotation = useCameraStore((state) => state.targetRotation);

  useFrame((state, delta) => {
    // Parallax effect based on mouse movement
    const parallaxX = (state.pointer.x * 0.5);
    const parallaxY = (state.pointer.y * 0.5);

    // Desired camera position = targetPosition from GSAP + Parallax offset
    const finalPosX = targetPosition.x + parallaxX;
    const finalPosY = targetPosition.y + parallaxY;
    const finalPosZ = targetPosition.z;

    // Smoothly step position
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, finalPosX, 4, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, finalPosY, 4, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, finalPosZ, 4, delta);

    // Smoothly step rotation, avoiding gimbal lock by using quaternion or direct damping of euler and then converting
    // Using simple damp on rotation since our angles are fairly small
    state.camera.rotation.x = THREE.MathUtils.damp(state.camera.rotation.x, targetRotation.x, 4, delta);
    state.camera.rotation.y = THREE.MathUtils.damp(state.camera.rotation.y, targetRotation.y, 4, delta);
    state.camera.rotation.z = THREE.MathUtils.damp(state.camera.rotation.z, targetRotation.z, 4, delta);
  });

  return null;
};

export default CameraController;
