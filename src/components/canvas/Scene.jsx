import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import CameraController from './CameraController';
import Hero3D from './Hero3D';
import Projects3D from './Projects3D';
import Skills3D from './Skills3D';

const Scene = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 w-full h-full bg-dark-950">
      <Canvas 
        dpr={[1, 1.5]} 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: false, alpha: true }}
      >
        <color attach="background" args={['#0f172a']} />
        <fog attach="fog" args={['#0f172a', 5, 20]} />
        
        {/* Environment setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        
        <CameraController />
        
        <Hero3D />
        <Projects3D />
        <Skills3D />
      </Canvas>
    </div>
  );
};

export default Scene;
