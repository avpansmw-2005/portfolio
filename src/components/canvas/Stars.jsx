import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingStars = () => {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta * 0.02;
      groupRef.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
