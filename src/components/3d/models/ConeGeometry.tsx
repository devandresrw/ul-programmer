'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface ConeProps {
  numx: number;
  numy: number;
  numz: number;
  radius: number;
  height: number;
  radialSegments: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

export default function Cone({
  numx,
  numy,
  numz,
  radius,
  height,
  radialSegments,
  position,
  rotation
}: ConeProps) {
  const cone = useRef<Mesh>(null!);

  useFrame(() => {
    if (cone.current) {
      cone.current.rotation.x += numx;
      cone.current.rotation.y += numy;
      cone.current.rotation.z += numz;
    }
  });

  return (
    <mesh ref={cone} position={position} rotation={rotation}>
      <meshBasicMaterial wireframe />
      <coneGeometry args={[radius, height, radialSegments]} />
    </mesh>
  );
};