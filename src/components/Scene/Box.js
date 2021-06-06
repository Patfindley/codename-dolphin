import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Box(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

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
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : props.color} />
    </mesh>
  )
}

