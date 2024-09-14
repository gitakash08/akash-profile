import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

// WebGL feature detection function
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
};

// Ball Component
const Ball = ({ imgUrl }) => {
  const [decal, loading, error] = useTexture([imgUrl || "default_image.png"]); // Fallback to default image

  // Error Handling (e.g., log if texture fails to load)
  if (error) {
    console.error("Error loading texture:", error);
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {!loading && !error && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

// BallCanvas Component
const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check for WebGL support
  if (!isWebGLAvailable()) {
    return <div>WebGL is not supported on this device</div>;
  }

  return (
    <Canvas
      frameloop="demand" // Optimized for performance, renders only when needed
      dpr={isMobile ? [1] : [1, 2]} // Lower pixel ratio on mobile for performance
      gl={{ antialias: true, preserveDrawingBuffer: true }} // Antialias and preserve for screenshots
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
