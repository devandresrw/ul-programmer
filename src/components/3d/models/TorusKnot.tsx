'use client'
import {  useRef } from 'react';
import { TorusKnot } from '@react-three/drei';
import {useFrame} from '@react-three/fiber'
import { Mesh } from 'three';


/**
interface TorusKnotProps {
  numx: number;
  numy: number;
  numz: number;
  radius: number;
  tube: number;
  tubularSegments: number;
  radialSegments: number;
  p: number;
  q: number;
  rotation: [number, number, number];
  position: [number, number, number];
}
 */

export default function TorusKnots() {
  const refKnot = useRef<Mesh>(null!);

  useFrame(() => {
    if (refKnot.current) {
      refKnot.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={refKnot}>
      <TorusKnot
        args={[20, 5, 100, 16]} // [radius, tube, tubularSegments, radialSegments]
        position={[0, 0, -6]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial wireframe />
      </TorusKnot>
    </mesh>
  )
}