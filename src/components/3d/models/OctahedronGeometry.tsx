'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface OctahedronProps {
  numx: number;
  numy: number;
  numz: number;
  size: number;
  position: [number, number, number];
}

export default function Octahedron({ numx, numy, numz, size, position }: OctahedronProps) {
  const octahedron = useRef<Mesh>(null!);

  useFrame(() => {
    if (octahedron.current) {
      octahedron.current.rotation.x += numx;
      octahedron.current.rotation.y += numy;
      octahedron.current.rotation.z += numz;
    }
  });

  return (
    <mesh ref={octahedron} position={position}>
      <meshBasicMaterial wireframe />
      <octahedronGeometry args={[size, 1]} />
    </mesh>
  );
};