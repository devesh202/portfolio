import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Hero3D = () => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;
    // Gentle floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#6366f1" wireframe emissive="#4f46e5" emissiveIntensity={0.15} transparent opacity={0.35} />
      </mesh>
      
      {/* Background Particles for Hero */}
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color="#1e1b4b" wireframe transparent opacity={0.05} side={1} />
      </mesh>
    </group>
  );
};

export default Hero3D;
