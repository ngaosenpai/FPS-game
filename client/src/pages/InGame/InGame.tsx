import React from 'react';
import './InGame.scss'

import { Canvas } from "@react-three/fiber"

import Plane from '../../components/3Ds/Plane';
import { Physics } from "@react-three/cannon"

import Controls from '../../components/3Ds/Controls';
import { Box } from '../../components/3Ds/Box';


function InGame() {
  return (
    <div className='in-game'>
      <Canvas 
        style={{ height: "100%", width: "100%" }}
        camera={{ position: [0, 3, 5], fov: 75 }}
        shadows
      >
          <Physics>
            {/* light */}
            <hemisphereLight intensity={0.35} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.3}
              penumbra={1}
              intensity={2}
              castShadow
            />
            {/*  */}

            <Controls />
            <Plane planeSize={[1000, 1000]} recieveShadow={true}/>
            <Box />
          </Physics>
      </Canvas>
    </div>
  );
}

export default InGame;