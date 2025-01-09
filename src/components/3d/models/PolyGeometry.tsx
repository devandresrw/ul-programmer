'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface BoxProps {
  numx: number;
  numy: number;
  size: [number, number, number];
  position: [number, number, number];
}

export default function Poly({ numx, numy, position, size }: BoxProps) {
  const box = useRef<Mesh>(null!);

  useFrame(() => {
    if (box.current) {
      box.current.rotation.x += numx;
      box.current.rotation.y += numy;
    }
  });

  // Define vertices and indices for a custom polyhedron
  const vertices = [
    1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
    1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1
  ];
  const indices = [
    0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
    0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5,
    2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7
  ];

  return (
    <mesh ref={box} position={position}>
      <meshBasicMaterial wireframe />
      <polyhedronGeometry args={[vertices, indices, size[0], 2]} />
    </mesh>
  );
};  