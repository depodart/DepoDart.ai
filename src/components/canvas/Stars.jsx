import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 1500; // Adjust the number of stars as needed

const Stars = () => {
  // Use a group ref to update rotation
  const groupRef = useRef();

  // Generate star positions only once on mount
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.2 }),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta / 10;
      groupRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="stars-canvas-container">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      // Limit dpr to reduce rendering load on high-resolution devices
      dpr={[1, 1.5]}
      // Disable anti-aliasing if not essential for your design
      gl={{ antialias: false }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
