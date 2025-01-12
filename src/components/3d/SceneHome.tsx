'use client'
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

interface SceneProps {
  children: ReactNode;
}




export const Scene = ({ children }: SceneProps) => {
  return (
    <Suspense fallback={null} >
      <Canvas
        flat={true}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 10],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-[20rem]">
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          {children}
        </Suspense>
      </Canvas>
    </Suspense>
  )
}