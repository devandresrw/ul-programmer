'use client'
import { Mesh } from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector2 } from 'three';


interface LatheProps {
  numx: number;
  numy: number;
  numz: number;
  position1: [number, number, number];
  position2: [number, number, number];
  position3: [number, number, number];
  position4: [number, number, number];
  rotation1: [number, number, number];
  rotation2: [number, number, number];
  rotation3: [number, number, number];
  rotation4: [number, number, number];
  args?: [points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number];
}

export default function Lathe({
  numx,
  numy,
  numz,
  position1,
  position2,
  position3,
  position4,
  rotation1,
  rotation2,
  rotation3,
  rotation4,
  args }: LatheProps) {
  const lathe1 = useRef<Mesh>(null!);
  const lathe2 = useRef<Mesh>(null!);
  const lathe3 = useRef<Mesh>(null!);
  const lathe4 = useRef<Mesh>(null!);

  useFrame(() => {
    if (lathe1.current) {
      lathe1.current.rotation.x += numx;
      lathe1.current.rotation.y += numy;
      lathe1.current.rotation.z += numz;
    }
    if (lathe2.current) {
      lathe2.current.rotation.x += numx;
      lathe2.current.rotation.y += numy;
      lathe2.current.rotation.z += numz;
    }
    if (lathe3.current) {
      lathe3.current.rotation.x += numx;
      lathe3.current.rotation.y += numy;
      lathe3.current.rotation.z += numz;
    }
    if (lathe4.current) {
      lathe4.current.rotation.x += numx;
      lathe4.current.rotation.y += numy;
      lathe4.current.rotation.z += numz;
    }
  },);

  // Define points for the lathe geometry


  return (
    <>
      <mesh ref={lathe1} position={position1} rotation={rotation1}>
        <meshBasicMaterial wireframe />
        <latheGeometry args={args} />
      </mesh>
      <mesh ref={lathe2} position={position2} rotation={rotation2}>
        <meshBasicMaterial wireframe />
        <latheGeometry args={args} />
      </mesh>
      <mesh ref={lathe3} position={position3} rotation={rotation3}>
        <meshBasicMaterial wireframe />
        <latheGeometry args={args} />
      </mesh>
      <mesh ref={lathe4} position={position4} rotation={rotation4}>
        <meshBasicMaterial wireframe />
        <latheGeometry args={args} />
      </mesh>
    </>
  );
};