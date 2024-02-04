/**
 *  @author Nauval Yusuf Addairy
 *  @see https://codesandbox.io/p/sandbox/t-shirt-configurator-ioxywi?file=%2F.prettierrc%3A1%2C1-10%2C2
 * @fileoverview based on poimanders example project
 */

import React, { useEffect, useRef, useState, ForwardRefExoticComponent, Ref } from 'react'

import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Environment,
  AccumulativeShadows,
  AccumulativeShadowsProps,
  ShadowRefProps,
  RandomizedLight,
  AccumulativeContextForUseRef
} from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Color, ColorRepresentation, Euler, Object3D, Vector3 } from 'three'
import { easing } from 'maath'

//Object3D<E extends BaseEvent = Event>.position?: Vector3 | undefined
export default function GlobeCanvas({
  position = [0, 0, 2.5] as unknown as Vector3,
  fov = 25,
  refs
}: {
  refs?: React.MutableRefObject<HTMLElement | undefined>
  position?: any
  fov?: number
}) {
  console.log('refsssss', refs)

  const { materials, nodes } = useGLTF('/globe.glb')
  console.log('materials ', materials)
  console.log('nodes ', nodes)

  return (
    <Canvas shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: false }} eventPrefix="client" eventSource={refs?.current}>
      <ambientLight intensity={0.05} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <CameraRig>
        <BackDoor>
          <Globe />
        </BackDoor>
      </CameraRig>
    </Canvas>
  )
}

const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    // camera position
    easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta)
    // object 3d position relative to camera
    // easing.dampE( object current rotation, cursor position [x,y,z], easing value for smoothness, delata : number)
    easing.dampE(group.current?.rotation as Euler, [state.pointer.x / 10, -state.pointer.y / 4, 0], delta)
  })
  return <group ref={group}>{children}</group>
}
/**
 *  @function BackDoor i mean BackDrop this typo is on purpose cheers :D
 * I use for backdrop shadow relative to 3d model
 */

const BackDoor = ({ children }: { children: React.ReactNode }) => {
  const shadow = useRef<AccumulativeContextForUseRef>(null)
  // keep in mind useFrame will execute in infinite loop this is expected behavior so use this hook wisely ya !
  useFrame((state, delta) => {
    // easing.dampC() is for manipulating color either in shadow or 3d model
    /**
     *  @param state.color not preserved by default so you need to type merging see canvas.d.ts
     */
    // the value should be undefined to work properly
    // @ts-ignore
    easing.dampC(shadow.current?.getMesh().material.color as Color, state.color, 0.5, delta)
  })

  return (
    <AccumulativeShadows ref={shadow} temporal frames={60} alphaTest={0.85} scale={60} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.01]}>
      <RandomizedLight
        // idk what it is but if you adding higher value e.g 100 the screen becomes dark but object 3d still appears
        amount={2}
        // light circle size
        radius={9}
        // light color intensity lower value is bolder color intensity based on cloth color
        intensity={0.55}
        //
        ambient={0.25}
        // light position
        position={[2, 5, -10]}
      />
      <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  )
}

const Globe = ({ props }: { props?: MeshProps }) => {
  const { materials, nodes } = useGLTF('/globe.glb')

  return (
    <mesh castShadow geometry={nodes.Model_material_3_0.geometry} material={materials.material3} material-roughness={1} {...props} dispose={null} {...props} />
  )
}
