import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HomeButton(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Home.geometry}
        material={nodes.Home.material}
        rotation={[1.58, 0, 0]}
        scale={[2.61, 2.61, 2.61]}
      />
    </group>
  )
}

useGLTF.preload('/home.gltf')
