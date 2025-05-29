import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Environment, ContactShadows, Text } from '@react-three/drei';

// Mock component since we're not loading an actual model
const Phone = () => {
  const phoneRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  // Simulate phone screen content changing
  const [screenIndex, setScreenIndex] = React.useState(0);
  const screens = [
    { color: '#e6f2ff', name: 'Resource Library' },
    { color: '#e6ffe6', name: 'Progress Dashboard' },
    { color: '#ffe6e6', name: 'AI Recommendations' },
    { color: '#fff5e6', name: 'Quick Quiz' }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);
  
  useFrame((state) => {
    if (phoneRef.current) {
      // Subtle floating animation
      phoneRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });
  
  return (
    <group ref={phoneRef} position={[0, 0, 0]}>
      {/* Phone Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 4, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Phone Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.11]} castShadow>
        <boxGeometry args={[1.8, 3.6, 0.01]} />
        <meshStandardMaterial color={screens[screenIndex].color} emissive={screens[screenIndex].color} emissiveIntensity={0.5} />
      </mesh>
      
      {/* Screen Content - Simple Representation */}
      <group position={[0, 1, 0.15]}>
        <mesh>
          <planeGeometry args={[1.6, 0.3]} />
          <meshBasicMaterial color="#fff" transparent opacity={0.9} />
        </mesh>
        
        {/* App Title */}
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.2}
          color="#333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.4}
        >
          {screens[screenIndex].name}
        </Text>
      </group>
      
      {/* UI Elements - Simple Representation */}
      {[0, -0.5, -1, -1.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0.15]}>
          <planeGeometry args={[1.6, 0.3]} />
          <meshBasicMaterial color={i === 0 ? '#3D5AFE' : '#fff'} transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* AI Glow Effect */}
      <mesh position={[0, 0, 0.1]} visible={screenIndex === 2}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#3D5AFE" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

const PhoneModel: React.FC = () => {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas shadows={false} dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Phone />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default PhoneModel;