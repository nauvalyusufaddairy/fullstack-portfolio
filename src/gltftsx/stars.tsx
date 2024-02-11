'use client'
import { useState, useRef, Suspense, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random'
import { ThemeContext } from '@/context/ThemeContext'
import { Globe } from './globe'

const Stars = ({ props }: { props?: THREE.Points }) => {
  const { theme } = useContext(ThemeContext)
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }))

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  //#f332f3
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} {...props}>
        <PointMaterial transparent color={theme === 'dark' ? '#ed32f3' : '#000000'} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
export default Stars
