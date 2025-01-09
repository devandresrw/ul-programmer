'use client'
import { Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Geometryhome() {
  const dodeca = useRef<Mesh>(null!)

  useFrame(() => {
    if (dodeca.current) {
      dodeca.current.rotation.x += 0.001
      dodeca.current.rotation.y += 0.001
      dodeca.current.rotation.z += 0.001
    }
  })
  return (
    <mesh ref={dodeca} position={[0, 0, 0]}>
      <torusKnotGeometry args={[2.2, 0.6, 80, 50]} />
      <meshBasicMaterial wireframe />
    </mesh>
  )
}
