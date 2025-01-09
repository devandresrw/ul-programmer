'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector2 } from 'three';


interface LatheProps {
  numx: number;
  numy: number;
  position: [number, number, number];
}

export default function Lathe({ numx, numy, position }: LatheProps) {
  const lathe = useRef<Mesh>(null!);

  useFrame(() => {
    if (lathe.current) {
      lathe.current.rotation.x += numx;
      lathe.current.rotation.y += numy;
      lathe.current.rotation.z += 0.000;
    }
  });

  // Define points for the lathe geometry
  const points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
    points.push(new Vector2(Math.sin(i * 0.4) * 9 + 5, (i - 5) * 2));
  }

  return (
    <mesh ref={lathe} position={position}>
      <meshBasicMaterial wireframe />
      <latheGeometry args={[points, 9]} />
    </mesh>
  );
};