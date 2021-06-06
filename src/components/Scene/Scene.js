import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  softShadows,
  OrbitControls,
  Stars,
  CameraShake,
} from '@react-three/drei';
import Box from './Box';
import Tetrahedron from './Tetrahedron';
import Sphere from './Sphere';
// import Plane from './Plane';
// import Home from './Home';
import Lighting from './Lighting';
import { convertRangeScale } from '../../util/rangeScaling';

softShadows();

export default function Scene({
  currentNote,
  wave,
  distortionWet,
  cameraPositions,
}) {
  const shakeTime = 0.7;
  const shakeMaxIntensity = 0.2;
  const shapeAmount = 70;
  const spread = .5;
  const colors = ['#4B18E9', 'yellow', '#70D9B2', '#FF62B3'];
  const [shakeIntensity, setShakeIntensity] = useState(
    convertRangeScale([0, 1], [0, shakeMaxIntensity], distortionWet)
  );
  const [shape, setShape] = useState('square');
  const [shake, setShake] = useState(false);

  const createRandomPositions = (amount, spread) => {
    const randomPositions = [];
    for (let i = 0; i < amount; i++) {
      randomPositions.push(
        cameraPositions.map((p) => Math.floor(Math.random() * (p + i * spread)))
      );
    }
    const evenNegativePositions = randomPositions.map((r, i) => {
      if (i % 2 === 0) {
        return r.map((p) => -p);
      } else {
        return r;
      }
    });

    return evenNegativePositions.map((r, i) => {
      if (i % 3 === 0) {
        return r.map((p, i) => {
          if (i === 1) {
            return (p = -p);
          }
        });
      } else {
        return r;
      }
    });
  };

  const [randomPositions, setRandomPositions] = useState(
    createRandomPositions(shapeAmount, spread)
  );

  const createShapeComponents = (shape, colors) => {
    if (shape === 'square') {
      return randomPositions.map((r, i) => (
        <Box
          key={i}
          position={randomPositions[i]}
          color={colors[Math.floor(Math.random() * 4)]}
        />
      ));
    }
    if (shape === 'triangle') {
      return randomPositions.map((r, i) => (
        <Tetrahedron
          key={i}
          position={randomPositions[i]}
          color={colors[Math.floor(Math.random() * 4)]}
        />
      ));
    }
    if (shape === 'sphere') {
      return randomPositions.map((r, i) => (
        <Sphere
          key={i}
          position={randomPositions[i]}
          color={colors[Math.floor(Math.random() * 4)]}
        />
      ));
    }
  };

  const [shapeComponents, setShapeComponents] = useState(
    createShapeComponents(shape, colors)
  );

  useEffect(() => {
    setShakeIntensity(
      convertRangeScale([0, 1], [0, shakeMaxIntensity], distortionWet)
    );
  }, [distortionWet]);

  useEffect(() => {
    setRandomPositions(createRandomPositions(shapeAmount, spread));
    if (wave === 'square') {
      setShape('square');
    } else if (wave === 'fmtriangle') {
      setShape('triangle');
    } else if (wave === 'amsine') {
      setShape('sphere');
    }
  }, [wave]);

  useEffect(() => {
    if (shape === 'square') {
      const squares = createShapeComponents(shape.toString(), colors);
      setShapeComponents(squares);
    }
    if (shape === 'triangle') {
      const triangles = createShapeComponents(shape.toString(), colors);
      setShapeComponents(triangles);
    }
    if (shape === 'sphere') {
      const spheres = createShapeComponents(shape, colors);
      setShapeComponents(spheres);
    }
  }, [shape]);

  const shakeConfig = {
    maxYaw: Math.random() * 1,
    maxPitch: Math.random() * 0.2,
    maxRoll: Math.random() * 0.5,
    yawFrequency: Math.random() * 3,
    pitchFrequency: Math.random() * 3,
    rollFrequency: Math.random() * 3,
    intensity: shakeIntensity,
    decay: false,
    decayRate: shakeTime,
    additive: true,
  };

  const triggerShake = () => {
    return <CameraShake {...shakeConfig} />;
  };

  useEffect(() => {
    if (currentNote) {
      setShake(true);
    }
    setTimeout(() => setShake(false), shakeTime * 1000);
  }, [currentNote]);

  return (
    <main className='main'>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [Math.random() * -5, Math.random() * 2, Math.random() * 4],
          fov: 100,
        }}
      >
        {shake && triggerShake()}
        <Lighting />
        <OrbitControls enableZoom={false} />
        <Stars
          radius={200}
          depth={60}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <group>{[...shapeComponents]}</group>
      </Canvas>
    </main>
  );
}
