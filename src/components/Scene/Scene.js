import React from 'react'
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from "@react-three/drei";
import Box from './Box';
// soft Shadows
softShadows();

export default function Scene() {
  return (
    <main className='main'>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={.8}/>
        <directionalLight 
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
      />
      {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[10, 0, -20]} intensity={0.3} />
        <pointLight position={[0, -10, 0]} intensity={1.3} />
        <group>
        {/* This mesh is the plane (The floor) */}
          <mesh 
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -3, 0]}>
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <meshStandardMaterial attach='material' color={'lightblue'}/>
              {/* <shadowMaterial attach='material' opacity={0.3} /> */}
          </mesh>
        <Box position={[-1.2, 2, -5]} color='pink' />
        <Box position={[1.2, -2, 0]} color='orange'/>
        <Box position={[-4.2, 0, 0.5]} color='yellow' />
        <Box position={[4.2, 0, -1]} color='brown'/>
        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </main>
  )
}

