import React from 'react';
import type { CameraProps } from "./types"
import { PerspectiveCamera } from "@react-three/drei"

function Camera({ cameraPosition } : CameraProps) {
  return (
    <PerspectiveCamera makeDefault fov={75} position={cameraPosition} />
  );
}

export default Camera;