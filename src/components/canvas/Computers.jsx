import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// AI Brain / Neural Network orb representing agentic skills
const AIBrain = ({ ...props }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref} {...props}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.3]}
        />
        <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.3} metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial color="#915EFF" transparent opacity={0.15} side={THREE.BackSide} />
      </mesh>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[0.5, 0.01, 8, 32]} />
        <meshBasicMaterial color="#00ffcc" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// Floating laptop
const Laptop = ({ ...props }) => {
  return (
    <group {...props}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.08, 1.2]} />
        <meshStandardMaterial color="#2d2d2d" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.6, -0.56]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1.5, 1.1, 0.06]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Screen glow */}
      <mesh position={[0, 0.6, -0.52]} rotation={[0.3, 0, 0]}>
        <planeGeometry args={[1.3, 0.9]} />
        <meshBasicMaterial color="#915EFF" side={THREE.DoubleSide} transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

// Coffee cup
const CoffeeCup = ({ ...props }) => {
  return (
    <group {...props}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.12, 0.3, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>
      <mesh position={[0.15, 0, 0]}>
        <torusGeometry args={[0.08, 0.02, 8, 20, Math.PI]} />
        <meshStandardMaterial color="#8B4513" roughness={0.6} />
      </mesh>
    </group>
  );
};

// Plant
const Plant = ({ ...props }) => {
  return (
    <group {...props}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#c4956a" roughness={0.8} />
      </mesh>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i / 5) * Math.PI * 2) * 0.08,
            0.2 + i * 0.05,
            Math.cos((i / 5) * Math.PI * 2) * 0.08,
          ]}
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color={`hsl(${120 + i * 10}, 60%, 40%)`} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
};

// Floating geometric shapes
const FloatingShape = ({ geometry, color, position, speed }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += speed * 0.01;
      ref.current.rotation.y += speed * 0.015;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} transparent opacity={0.6} />
    </mesh>
  );
};

// Main scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#915EFF" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#00ffcc" />

      {/* Laptop */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Laptop position={[-0.5, 0.3, 0]} />
      </Float>

      {/* AI Brain - agentic skills */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <AIBrain position={[1.5, 1, -0.5]} />
      </Float>

      {/* Coffee Cup */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        <CoffeeCup position={[1.2, 0.2, 0.5]} />
      </Float>

      {/* Plant */}
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <Plant position={[-1.5, 0.15, 0.3]} />
      </Float>

      {/* Floating shapes */}
      <FloatingShape
        geometry={<icosahedronGeometry args={[0.3, 0]} />}
        color="#915EFF"
        position={[2, 0.5, -1]}
        speed={1.2}
      />
      <FloatingShape
        geometry={<torusGeometry args={[0.2, 0.05, 8, 24]} />}
        color="#00ffcc"
        position={[-2, 0.8, -0.5]}
        speed={0.8}
      />

      <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={10} blur={2} far={5} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />

      <Environment preset="night" />
    </>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
