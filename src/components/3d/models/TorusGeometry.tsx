'use client'
import { useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

interface TorusProps {
  numx: number
  numy: number
  numz: number
  size: [number, number, number, number]
  position: [number, number, number]
}

export default function Torus({
  numx,
  numy,
  numz,
  position,
  size
}: TorusProps) {

  const torusRef = useRef<Mesh>(null!)

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += numx
      torusRef.current.rotation.y += numy
      torusRef.current.rotation.z += numz
    }
  })

  return (
    <mesh ref={torusRef} position={position}
      rotation={[1, 0, 0]}>
      <meshBasicMaterial wireframe />
      <torusGeometry args={size} />
    </mesh>
  )
}