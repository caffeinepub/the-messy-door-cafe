import {
  Box,
  Cylinder,
  Float,
  OrbitControls,
  Sphere,
  Torus,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { Suspense } from "react";
import { useRef } from "react";
import type * as THREE from "three";

function RotatingCup() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });
  return (
    <group ref={ref}>
      <Cylinder args={[0.6, 0.45, 1.2, 32]}>
        <meshStandardMaterial color="#6B4A2E" roughness={0.3} />
      </Cylinder>
      <Cylinder args={[0.56, 0.56, 0.02, 32]} position={[0, 0.58, 0]}>
        <meshStandardMaterial color="#2A1209" roughness={0.9} />
      </Cylinder>
      <Torus
        args={[0.3, 0.065, 12, 20]}
        position={[0.8, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#8A623E" roughness={0.4} />
      </Torus>
    </group>
  );
}

function ExperienceScene() {
  return (
    <>
      <ambientLight intensity={0.8} color="#FFE4C4" />
      <pointLight position={[5, 5, 5]} intensity={60} color="#FFD4A0" />
      <pointLight position={[-5, 3, -3]} intensity={30} color="#FFC890" />
      <Float speed={1.5} floatIntensity={1}>
        <RotatingCup />
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Torus args={[0.5, 0.18, 16, 32]} position={[2.5, 1.5, -1]}>
          <meshStandardMaterial color="#C9A46A" roughness={0.4} />
        </Torus>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2.5, -1, -1]}>
          <meshStandardMaterial color="#8A623E" roughness={0.5} />
        </Box>
      </Float>
      <Float speed={2.2} rotationIntensity={1.2}>
        <Sphere args={[0.2]} position={[2, -1.5, 0]}>
          <meshStandardMaterial color="#4A2C1A" roughness={0.6} />
        </Sphere>
      </Float>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-24 bg-[oklch(0.185_0.055_42)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-[oklch(0.72_0.13_72)] uppercase mb-3">
            Interactive 3D
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[oklch(0.93_0.022_60)] tracking-wide">
            THE EXPERIENCE
          </h2>
          <div className="w-24 h-0.5 bg-[oklch(0.72_0.13_72)] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-96 rounded-2xl overflow-hidden border border-[oklch(0.35_0.07_42)]">
              <Suspense
                fallback={
                  <div className="h-full flex items-center justify-center text-[oklch(0.72_0.13_72)]">
                    Loading 3D Scene...
                  </div>
                }
              >
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 50 }}
                  gl={{ alpha: true }}
                >
                  <ExperienceScene />
                </Canvas>
              </Suspense>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif font-bold text-3xl text-[oklch(0.93_0.022_60)]">
              Step Inside Our World
            </h3>
            <p className="text-[oklch(0.72_0.04_58)] leading-relaxed">
              At The Messy Door Cafe, every corner tells a story. From the steam
              rising off your morning cup to the gentle hum of conversation —
              we've crafted a space where time slows down.
            </p>
            <p className="text-[oklch(0.72_0.04_58)] leading-relaxed">
              Explore our 3D environment to get a taste of what awaits you. Drag
              to spin, and let the warmth pull you in.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#menu"
                data-ocid="experience.primary_button"
                className="px-6 py-3 bg-[oklch(0.72_0.13_72)] text-[oklch(0.15_0.04_42)] font-sans font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[oklch(0.80_0.10_72)] transition-all duration-300"
              >
                See Our Menu
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
