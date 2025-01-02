import dynamic from "next/dynamic"

const GlassContainer = dynamic(
  () => import("@/components/containers/ContainerGlass")
    .then((mod) => mod.ContainerGlass),
  { ssr: true })

const Scene = dynamic(
  () => import("@/components/3d/Scene")
    .then((mod) => mod.Scene),
  { ssr: false })

const ModelKnot = dynamic(
  () => import("@/components/3d/models/TorusKnot")
    .then((mod) => mod.ModelKnot),
  { ssr: false })


export default function ContainerAll() {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
        <Scene>
          <ModelKnot />
        </Scene>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30
      px-5 py-5">
        <GlassContainer>
          <h1 className="text-white">dsf</h1>
        </GlassContainer>
      </div>
    </div>
  )
}