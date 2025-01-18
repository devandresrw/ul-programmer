'use client'
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, useEffect } from "react";
import { useThree } from "@react-three/fiber";

interface SceneProps {
  children: ReactNode;
}

const CleanupScene = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    return () => {
      gl.dispose();
      const canvas = gl.domElement;
      canvas.width = 1;
      canvas.height = 1;
      gl.forceContextLoss();
      gl.getContext()?.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [gl]);
  
  return null;
};

export const Scene = ({ children }: SceneProps) => {

  return (
    <div className={`w-full h-full py-5 px-4 rounded-2xl lg:px-1 lg:pt-4 lg:pb-1`}>
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
        className="w-full h-[20rem] rounded-xl">
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          <CleanupScene />
          {children}
        </Suspense>
      </Canvas>
    </Suspense>
    </div>
  )
}