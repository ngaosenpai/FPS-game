import { useBox } from "@react-three/cannon"
import { Mesh } from "three";

import type { BoxProps } from "./types"
function Box(props : BoxProps) {
  const [ref] = useBox<Mesh>(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props
  }));
  const color = props.color ? props.color : "hotpink";
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxBufferGeometry />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Box