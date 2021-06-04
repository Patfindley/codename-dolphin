
function Plane() {
  // const [ref] = usePlane(() => ({
  //   rotation: [-Math.PI / 2, 0, 0],
  // }));
  return (
    <mesh 
      // ref={ref}
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -3, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' color={'lightblue'}/>
      {/* <shadowMaterial attach='material' opacity={0.3} /> */}
    </mesh> 
  );
}

export default Plane
