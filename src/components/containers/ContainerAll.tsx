import dynamic from "next/dynamic"

const GlassContainer = dynamic(
  () => import("@/components/containers/ContainerGlass")
    .then((mod) => mod.ContainerGlass),
  { ssr: false })

export default function ContainerAll() {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
        <h1 className="text-white">dsfa</h1>
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