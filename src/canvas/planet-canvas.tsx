import { Planet } from '@/gltftsx/planet'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from './loader'

export default function PlanetCanvas() {
  const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')
    return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  }
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}
