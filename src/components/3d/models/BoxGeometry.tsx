'use client'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  numy: number;
  numx: number;
  size: [number, number, number];
  position: [number, number, number];
}

export default function Box({ numx, numy, position, size }: BoxProps) {
  const box = useRef<Mesh>(null!);

  useFrame(() => {
    if (box.current) {
      box.current.rotation.x += numx;
      box.current.rotation.y += numy
    }
  });

  return (
    <mesh ref={box} position={[20, 0, -5]}>
      <meshBasicMaterial wireframe />
      <boxGeometry args={size} />
    </mesh>
  );
};
