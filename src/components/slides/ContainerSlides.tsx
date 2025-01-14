import dynamic from 'next/dynamic'

import { useStoreLayers } from '@/stores/useStoreLayers'
import {
  HomeSlide,
  AboutSlide,
  SkillsSlide,
  DjosSlide,
  ProjectsSlide,
  CodesSlide,
  ContactSlide
} from '@/components'

const slidesComponents = [
  HomeSlide,
  AboutSlide,
  SkillsSlide,
  DjosSlide,
  ProjectsSlide,
  CodesSlide,
  ContactSlide
]
const Btn = dynamic(
  () => import("@/components/utils/Btn")
    .then((mod) => mod.Btn),
  { ssr: true })


export const ContainerSlides = () => {
  const currentIndex = useStoreLayers((state) => state.currentIndex)
  const increment = useStoreLayers((state) => state.increment)
  const decrement = useStoreLayers((state) => state.decrement)


  const SlideComponent = slidesComponents[currentIndex];

  return (
    <div className="container h-full w-full">
      <Btn onClick={increment} direction="right"
      />
      <SlideComponent />
      <Btn onClick={decrement} direction="left" />
    </div>
  )
}