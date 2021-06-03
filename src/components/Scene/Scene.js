import React from 'react'
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls } from "@react-three/drei";
import Box from './Box';
import Tetrahedron from './Tetrahedron';
import Sphere from './Sphere';
import Plane from './Plane';
import Lighting from './Lighting'

// soft Shadows
softShadows();

export default function Scene(props) {
  // if (props.wave === 'square') {
      return (
        <main className='main'>
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 2, 10], fov: 60 }}>
            <Lighting/>
            <Plane/>
            <OrbitControls />
            {props.wave === 'square' && <group>
            {/* This mesh is the plane (The floor) */}
              <Box position={[-1.2, 2, -5]} color='pink' />
              <Box position={[1.2, -1, 0]} color='orange'/>
              <Box position={[-4.2, 0, 0.5]} color='yellow' />
              <Box position={[4.2, 0, -1]} color='brown'/>
            </group>}
            {props.wave === 'fmtriangle' && <group>
            {/* This mesh is the plane (The floor) */}
              <Tetrahedron position={[-1.2, 2, -5]} color='pink' />
              <Tetrahedron position={[1.2, -1, 0]} color='orange'/>
              <Tetrahedron position={[-4.2, 0, 0.5]} color='yellow' />
              <Tetrahedron position={[4.2, 0, -1]} color='brown'/>
            </group>}
            {props.wave === 'amsine' && <group>
            {/* This mesh is the plane (The floor) */}
              <Sphere position={[-1.2, 2, -5]} color='pink' />
              <Sphere position={[1.2, -1, 0]} color='orange'/>
              <Sphere position={[-4.2, 0, 0.5]} color='yellow' />
              <Sphere position={[4.2, 0, -1]} color='brown'/>
            </group>}
            {/* Allows us to move the canvas around for different prespectives */}
          </Canvas>
        </main>
      )
    // } else if (props.wave === 'fmtriangle') {
    //   return (

    //   )
    // } else {
    //   return (

    //   )
    // }
  }