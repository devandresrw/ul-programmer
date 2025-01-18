import { Scene } from '@/components/3d/SceneHome'
import Geometryhome from '@/components/3d/models/HomeGeometry'
import Image from "next/image"

export const HomeSlide = () => {
  return (
    <>
      <div className="absolute top-[3rem] md:right-44 md:top-[6rem] z-50">
        <Image
          src={'./logo.svg'}
          alt="andresrw"
          width={280}
          height={200}
          className='h-auto md:w-96'
        />
      </div>
      <div className='rounded-3xl h-full p-1'>
        <Scene >
          <Geometryhome
            numx={0}
            numy={0}
            numz={0.001}
            position={[0, 0, 7]}
            args={[2.2, 0.6, 80, 50]}
          />
        </Scene>
      </div>
    </>
  )
}