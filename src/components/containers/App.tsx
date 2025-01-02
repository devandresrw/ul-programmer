import dynamic from 'next/dynamic'
import ContainerIntro from '@/components/containers/IntroCo'

const ContainerAll = dynamic(
  () => import('@/components/containers/ContainerAll')
    .then((mod) => mod.default),
  { ssr: false }
)

export const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <ContainerIntro />
      <ContainerAll />
    </div>
  )
}