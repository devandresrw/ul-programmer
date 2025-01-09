'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface RingProps {
  numx: number;
  numy: number;
  numz: number;
  innerRadius: number;
  outerRadius: number;
  thetaSegments: number;
  phiSegments: number;
  rotation: [number, number, number];
  position: [number, number, number];
}

export default function Ring({
  numx, numy, numz,
  innerRadius, outerRadius,
  thetaSegments,
  phiSegments, position,
  rotation

}: RingProps) {
  const ring = useRef<Mesh>(null!);

  useFrame(() => {
    if (ring.current) {
      ring.current.rotation.x += numx;
      ring.current.rotation.y += numy;
      ring.current.rotation.z += numz;
    }
  });

  return (
    <mesh ref={ring}
      rotation={rotation}
      position={position}>
      <meshBasicMaterial wireframe />
      <ringGeometry args={[innerRadius, outerRadius, thetaSegments, phiSegments]} />
    </mesh>
  );
};