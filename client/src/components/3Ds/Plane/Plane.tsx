import React from 'react';
import { usePlane } from "@react-three/cannon"
import { PlaneProps } from './types'
import { Group, Mesh } from 'three';

function Plane(props : PlaneProps) {
  const [ref] = usePlane<Group>(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props}));
  return ( 
    <group ref={ref}>
      <mesh receiveShadow={props.recieveShadow}>
        <planeBufferGeometry args={props.planeSize}/>
        <shadowMaterial color="black" attach="material" />
      </mesh>
      <mesh>
        <planeBufferGeometry args={props.planeSize}/>
        <meshBasicMaterial color="green" attach="material" />
      </mesh>

    </group>
  );
}

export default Plane;