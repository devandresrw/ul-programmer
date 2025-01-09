'use client'
import dynamic from "next/dynamic"

const GlassContainer = dynamic(
  () => import("@/components/containers/ContainerGlass")
    .then((mod) => mod.ContainerGlass),
  { ssr: true })

const Scene = dynamic(
  () => import("@/components/3d/Scene")
    .then((mod) => mod.Scene),
  { ssr: false })


const SectionContend = dynamic(
  () => import("@/components/containers/SectionContend")
    .then((mod) => mod.SectionContend),
  { ssr: true })


const ContainerSlides = dynamic(
  () => import("@/components/slides/ContainerSlides")
    .then((mod) => mod.ContainerSlides),
  { ssr: true })

const ContainersModel = dynamic(
  () => import("@/components/3d/models/ContainersModel")
    .then((mod) => mod.ContainersModel),
  { ssr: true })



const slidesComponentsLength = 6; // Número de componentes en el arreglo


export default function ContainerAll() {

  return (
    <div className="h-screen w-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
        <Scene>
          <ContainersModel />
        </Scene>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30
      px-5 py-5">
        <GlassContainer>

          <SectionContend>
            <ContainerSlides />
          </SectionContend>

        </GlassContainer>
      </div>
    </div>
  )
}