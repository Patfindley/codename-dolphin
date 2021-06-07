import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';

export default function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x += 0.03));
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh
      castShadow
      position={props.position}
      color={props.color}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial
        color={props.color}
        opacity={hovered ? 0.6 : 1}
        transparent={hovered ? true : false}
      />
    </mesh>
  );
}
