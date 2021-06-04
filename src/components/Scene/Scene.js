import React from 'react'
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls, Stars } from "@react-three/drei";
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
            {/* <Plane/> */}
            <OrbitControls enableZoom={false} />
            <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade/>
            {props.wave === 'square' && 
            <group>
            {/* This mesh is the plane (The floor) */}
              <Box position={[5, 0, 5]} color='pink' />
              <Box position={[0, 5, -5]} color='orange'/>
              <Box position={[3, -5, -2]} color='yellow' />
              <Box position={[-7, 0, 0]} color='brown'/>
            </group>}

            {props.wave === 'fmtriangle' && 
            <group>
            {/* This mesh is the plane (The floor) */}
              <Tetrahedron position={[5, 0, 5]} color='pink' />
              <Tetrahedron position={[0, 5, -5]} color='orange'/>
              <Tetrahedron position={[3, -5, -2]} color='yellow' />
              <Tetrahedron position={[-7, 0, 0]} color='brown'/>
            </group>}

            {props.wave === 'amsine' && 
            <group>
            {/* This mesh is the plane (The floor) */}
              <Sphere position={[5, 0, 5]} color='pink' />
              <Sphere position={[0, 5, -5]} color='orange'/>
              <Sphere position={[3, -5, -2]} color='yellow' />
              <Sphere position={[-7, 0, 0]} color='brown'/>
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