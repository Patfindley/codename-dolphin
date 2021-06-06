function Plane() {

  return (
    <mesh className='hidden-plane'
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -3, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' color='#ffffff00' />
    </mesh> 
  );
}

export default Plane
