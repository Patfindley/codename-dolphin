import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Sphere(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active states
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, thi sis outside of React without overhead
  useFrame(() => (mesh.current.rotation.x += 0.03))
  useFrame(() => (mesh.current.rotation.y += 0.01))

  return (
    <mesh
      castShadow
      position={props.position}
      color={props.color}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : props.color} />
    </mesh>
  )
}

