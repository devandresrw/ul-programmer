'use client'
import { Mesh } from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

interface GeometryProps {
  numx: number;
  numy: number;
  numz: number;
  position: [number, number, number];
  args: [number, number, number, number];
}

export default function Geometryhome(
  { numx, numy, numz, position, args }: GeometryProps
) {
  const dodeca = useRef<Mesh>(null!)


  useEffect(() => {
    return () => { }
  }, [])
  useFrame(() => {
    if (dodeca.current) {
      dodeca.current.rotation.x += numx
      dodeca.current.rotation.y += numy
      dodeca.current.rotation.z += numz
    }
  })
  return (
    <mesh ref={dodeca} position={position}>
      <torusKnotGeometry args={args} />
      <meshBasicMaterial wireframe />
    </mesh>
  )
}
//position={[0, 0, 0]}
//args={[2.2, 0.6, 80, 50]}