import React from 'react'

function Lighting() {
  return (
    <>
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
    </>
  )
}

export default Lighting
