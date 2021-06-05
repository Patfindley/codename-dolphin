import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows, OrbitControls, Stars, CameraShake } from '@react-three/drei';
import Box from './Box';
import Tetrahedron from './Tetrahedron';
import Sphere from './Sphere';
import Plane from './Plane';
import Home from './Home';
import Lighting from './Lighting';
import { convertRangeScale, convertRangeValue } from '../../util/rangeScaling'

// soft Shadows
softShadows();

export default function Scene({ currentNote, wave, distortionWet, cameraPositions }) {
  // const [cameraX, setCameraX] = useState(Math.random() * 10)
  // const [cameraY, setCameraY] = useState(Math.random() * 10)
  // const [cameraZ, setCameraZ] = useState(Math.random() * 10)
  // useEffect(() => {
  //   if (currentNote) {
      
  //   }
  // }, [currentNote]);
  const shakeRange = convertRangeScale([0, 1], [0, .65], distortionWet);
  
  // useEffect(() => {
  //   setCameraX(Math.floor(Math.random() * 10));
  //   setCameraY(Math.floor(Math.random() * 10));
  //   setCameraZ(Math.floor(Math.random() * 10));
  // }, [wave])

  const config = {
    maxYaw: 2, // Max amount camera can yaw in either direction
    maxPitch: 2, // Max amount camera can pitch in either direction
    maxRoll: 2, // Max amount camera can roll in either direction
    yawFrequency: Math.floor(Math.random() * 4), // Frequency of the the yaw rotation
    pitchFrequency: Math.floor(Math.random() * 4), // Frequency of the pitch rotation
    rollFrequency: Math.floor(Math.random() * 4), // Frequency of the roll rotation
    intensity: shakeRange, // initial intensity of the shake
    decay: false, // should the intensity decay over time
    decayRate: 1, // if decay = true this is the rate at which intensity will reduce at
    additive: true, // this should be used when your scene has orbit controls
  }

  const randomPositions1 = cameraPositions.map(p => Math.floor(Math.random() * (p + 2)))
  const randomPositions2 = cameraPositions.map(p => Math.floor(Math.random() * (p + 4)))
  const randomPositions3 = cameraPositions.map(p => Math.floor(Math.random() * (p + 6)))
  const randomPositions4 = cameraPositions.map(p => Math.floor(Math.random() * (p + 8)))

  return (
    <main className='main'>
      <Canvas
        colorManagement
        shadowMap
        camera={{position: [...cameraPositions], fov: 75 }}
        >
        { currentNote &&
          <CameraShake { ...config } />
        }
        <Lighting />
        {/* <Plane/> */}
        <OrbitControls enableZoom={false} />
        <Stars
          radius={100}
          depth={60}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        {/* <Home position={[-20, 1, -20]} color='pink'/> */}
        {wave === 'square' && (
          <group>
            <Box position={[...randomPositions1]} color='#FF62B3' />
            <Box position={[...randomPositions2]} color='#4B18E9' />
            <Box position={[...randomPositions3]} color='yellow' />
            <Box position={[...randomPositions4]} color='#70D9B2' />
          </group>
        )}

        {wave === 'fmtriangle' && (
          <group>
            <Tetrahedron position={[...randomPositions1]} color='#4B18E9' />
            <Tetrahedron position={[...randomPositions2]} color='yellow' />
            <Tetrahedron position={[...randomPositions3]} color='#70D9B2' />
            <Tetrahedron position={[...randomPositions4]} color='#FF62B3' />
          </group>
        )}

        {wave === 'amsine' && (
          <group>
            <Sphere position={[...randomPositions1]} color='yellow' />
            <Sphere position={[...randomPositions2]} color='#70D9B2' />
            <Sphere position={[...randomPositions3]} color='#FF62B3' />
            <Sphere position={[...randomPositions4]} color='#4B18E9' />
          </group>
        )}
        {/* Allows us to move the canvas around for different prespectives */}
      </Canvas>
    </main>
  );
  // } else if (wave === 'fmtriangle') {
  //   return (

  //   )
  // } else {
  //   return (

  //   )
  // }
}
