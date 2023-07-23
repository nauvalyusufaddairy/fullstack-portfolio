import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { useEffect, useState, Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

type Props = {
  isMobile: boolean;
};
const RocketV1: React.FC<Props> = ({ isMobile }) => {
  const rocket = useGLTF("./3d/rocketv3.glb");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-5, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={rocket.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default function Rocket() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener to capture every screen size changes
    const media = window.matchMedia("(max-width: 425px)");

    // capture the screen size
    setIsMobile(media.matches);

    // define callback function for event listener
    const screenSizeChangesHandler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // create media event listener function

    media.addEventListener("change", screenSizeChangesHandler);

    // remove event listener when component is unmounting
    return () => {
      media.removeEventListener("change", screenSizeChangesHandler);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <RocketV1 isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
