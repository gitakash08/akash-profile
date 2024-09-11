import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, error } = useGLTF("./desktop_pc/scene.gltf");

  if (error) {
    console.error("Error loading GLTF model:", error);
  }

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='black' />
      <spotLight
        position={[-20, 80, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      {scene && (
        <primitive
          object={scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      )}
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

  useEffect(() => {
    // Define a debounced function to avoid excessive re-renders on resize
    const handleMediaQueryChange = (event) => {
      if (event.matches !== isMobile) {
        setIsMobile(event.matches);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up the event listener on unmount
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, [isMobile]);

  return (
    <Canvas
      frameloop='demand' // Optimize rendering performance
      shadows
      dpr={[1, 2]} // Adjust device pixel ratio for better performance
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }} // Retain drawing buffer for screenshots
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
