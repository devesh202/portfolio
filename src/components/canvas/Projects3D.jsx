import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Projects3D = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y -= delta * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, -10, 0]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1} >
         <mesh position={[-3, 0, -2]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#ec4899" wireframe emissive="#db2777" emissiveIntensity={0.15} transparent opacity={0.35} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} >
        <mesh position={[3, -1, -5]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#3b82f6" wireframe emissive="#2563eb" emissiveIntensity={0.15} transparent opacity={0.35} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5} >
        <mesh position={[0, 2, -8]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshStandardMaterial color="#8b5cf6" wireframe emissive="#7c3aed" emissiveIntensity={0.15} transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
};

export default Projects3D;
