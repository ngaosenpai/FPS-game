import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib';

const Controls = () => {
  const controlsRef = useRef<PointerLockControlsImpl>(null);
  const isLocked = useRef(false);


  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  useFrame(() => {
    const velocity = 0.05;
    if(controlsRef && controlsRef.current){

      if (moveForward) {
        controlsRef.current.moveForward(velocity);
      } else if (moveLeft) {
        controlsRef.current.moveRight(-velocity);
      } else if (moveBackward) {
        controlsRef.current.moveForward(-velocity);
      } else if (moveRight) {
        controlsRef.current.moveRight(velocity);
      }

    }
  });

  const onKeyDown = function (event: KeyboardEvent) {
    if(isLocked.current){
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          setMoveForward(true);
          break;
  
        case "ArrowLeft":
        case "KeyA":
          setMoveLeft(true);
          break;
  
        case "ArrowDown":
        case "KeyS":
          setMoveBackward(true);
          break;
  
        case "ArrowRight":
        case "KeyD":
          setMoveRight(true);
          break;
  
        // case "Space":
        //   if (canJump === true) velocity.y += 350;
        //   canJump = false;
        //   break;
        default:
          return;
      }
    }
  };

  const onKeyUp = function (event: KeyboardEvent) {
    if(isLocked.current){
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          setMoveForward(false);
          break;
  
        case "ArrowLeft":
        case "KeyA":
          setMoveLeft(false);
          break;
  
        case "ArrowDown":
        case "KeyS":
          setMoveBackward(false);
          break;
  
        case "ArrowRight":
        case "KeyD":
          setMoveRight(false);
          break;
  
        default:
          return;
      }

    }
  };

  const lock = () => {
    if(isLocked.current === false){
      console.log("lock");
      isLocked.current = true;
    }
  }

  const unLock = () => {
    if(isLocked.current){
      console.log("unlock");
      isLocked.current = false;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    if (controlsRef.current) {
      controlsRef.current.addEventListener("lock", lock);
      controlsRef.current.addEventListener("unlock", unLock);
    }
    
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("keyup", onKeyUp)
      controlsRef.current?.removeEventListener("lock", lock)
      controlsRef.current?.removeEventListener("unlook", unLock)
    }
  }, [])

  return (
    <PointerLockControls
      ref={controlsRef}
    />
  );
};

export default Controls;
