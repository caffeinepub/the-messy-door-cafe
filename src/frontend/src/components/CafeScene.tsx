import {
  Box,
  Cylinder,
  Float,
  OrbitControls,
  Sphere,
  Torus,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={groupRef} position={[2.5, 0, 0]}>
        <Cylinder args={[0.55, 0.4, 1.1, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#6B4A2E"
            roughness={0.3}
            metalness={0.1}
          />
        </Cylinder>
        <Torus
          args={[0.55, 0.04, 16, 32]}
          position={[0, 0.55, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#8A623E" roughness={0.2} />
        </Torus>
        <Cylinder args={[0.51, 0.51, 0.02, 32]} position={[0, 0.48, 0]}>
          <meshStandardMaterial color="#3D2010" roughness={0.8} />
        </Cylinder>
        <Torus
          args={[0.28, 0.06, 12, 20]}
          position={[0.72, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshStandardMaterial color="#6B4A2E" roughness={0.3} />
        </Torus>
        <Cylinder args={[0.85, 0.75, 0.1, 32]} position={[0, -0.62, 0]}>
          <meshStandardMaterial
            color="#C9A46A"
            roughness={0.4}
            metalness={0.05}
          />
        </Cylinder>
      </group>
    </Float>
  );
}

function SteamParticle({ offset }: { offset: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.elapsedTime * 0.5 + offset) % 1;
      ref.current.position.y = 0.6 + t * 2;
      ref.current.position.x = 2.5 + Math.sin(t * Math.PI * 3 + offset) * 0.15;
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = t < 0.5 ? t * 2 * 0.6 : (1 - t) * 2 * 0.6;
      const scale = 0.03 + t * 0.08;
      ref.current.scale.setScalar(scale);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#F5EBDD" transparent opacity={0.5} />
    </mesh>
  );
}

function FloatingDonut({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Torus args={[0.35, 0.15, 16, 32]} position={position}>
        <meshStandardMaterial color="#C9A46A" roughness={0.5} metalness={0.1} />
      </Torus>
    </Float>
  );
}

function FloatingBean({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
      <Sphere args={[0.12, 8, 8]} position={position}>
        <meshStandardMaterial color="#4A2C1A" roughness={0.6} />
      </Sphere>
    </Float>
  );
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.8}>
      <Box args={[0.3, 0.3, 0.3]} position={position}>
        <meshStandardMaterial color="#8A623E" roughness={0.4} />
      </Box>
    </Float>
  );
}

const STEAM_OFFSETS = [0, 0.33, 0.66];

function Scene() {
  const steamOffsets = useMemo(() => STEAM_OFFSETS, []);

  return (
    <>
      <ambientLight intensity={0.6} color="#FFE4C4" />
      <pointLight position={[4, 6, 4]} intensity={60} color="#FFD4A0" />
      <pointLight position={[-4, 3, -2]} intensity={30} color="#FFC890" />
      <pointLight position={[0, -2, 4]} intensity={20} color="#FFE0B0" />
      <CoffeeCup />
      {steamOffsets.map((offset) => (
        <SteamParticle key={`steam-${offset}`} offset={offset} />
      ))}
      <FloatingDonut position={[-2.5, 1.2, -1]} />
      <FloatingDonut position={[-1.5, -1, -2]} />
      <FloatingDonut position={[1, 2, -2]} />
      <FloatingBean position={[-3, 0.5, 0]} />
      <FloatingBean position={[3.5, -1, -1]} />
      <FloatingBean position={[-2, -1.5, 1]} />
      <FloatingBean position={[0.5, 2.5, -1.5]} />
      <FloatingBox position={[-3.5, -0.5, -1.5]} />
      <FloatingBox position={[2, -2, -1]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export function CafeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene />
    </Canvas>
  );
}
