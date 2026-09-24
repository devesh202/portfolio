import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

const Skills3D = () => {
  const groupRef = useRef();

  // Create a grid/cluster of floating spheres
  const spheres = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 10
        ],
        scale: Math.random() * 0.5 + 0.1,
        color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.6, 0.8, 0.5) // Blue-purple hues
      });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={groupRef} position={[10, -20, 0]}>
      {spheres.map((sphere, i) => (
        <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={Math.random() * 2} floatIntensity={Math.random() * 2}>
          <mesh position={sphere.position} scale={sphere.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial 
              color={sphere.color} 
              emissive={sphere.color} 
              emissiveIntensity={0.15}
              transparent
              opacity={0.35}
              wireframe={Math.random() > 0.5} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default Skills3D;
