import { Scene } from '@/components/3d/Scene'
import Geometryhome from '@/components/3d/models/HomeGeometry'
import Image from "next/image"

export const HomeSlide = () => {
  return (
    <>
      <div className="absolute top-16  z-50">
        <Image
          src={'./logo.svg'}
          alt="andresrw"
          width={280}
          height={200}
        />
      </div>
      <div className='rounded-3xl h-full p-1'>
        <Scene >
          <Geometryhome />
        </Scene>
      </div>
    </>
  )
}