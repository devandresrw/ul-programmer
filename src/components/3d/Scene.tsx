'use client'
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

interface SceneProps {
  children: ReactNode;
}


const ConfigScene = dynamic(
  () => import("@/components/3d/ConfigScene")
    .then((mod) => mod.ConfigScene),
  { ssr: true }
)
const Postprocessing = dynamic(
  () => import("@/components/3d/Postprocesing")
    .then((mod) => mod.EffectComposerSettingss),
  { ssr: true }
)


export const Scene = ({ children }: SceneProps) => {
  return (
    <Suspense fallback={null}>
      <Canvas
        flat={true}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full">
        <color attach="background" args={["#18191A"]} />
        <Suspense fallback={null}>
          <ConfigScene />
          <Postprocessing />
          {children}
        </Suspense>

      </Canvas>
    </Suspense>
  )
}