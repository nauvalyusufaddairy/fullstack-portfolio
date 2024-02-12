import { Planet } from '@/gltftsx/planet'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from './loader'
import { Night } from '@/gltftsx/Night'

export default function PlanetCanvas() {
  const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf')
    return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} position={[4, 0, 0]} />
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
        position: [-4, 3, 4]
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <pointLight position={[1, 1, 1]} intensity={15} />
        <pointLight position={[1, 4, -3]} intensity={25} />
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} />
        <Earth />

        <Night position={[1, -0.7, 3]} />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}
