import { SliderImages } from "@/components/utils/SliderImages"
import Link from 'next/link'
import {
  Agency,
  Cuartel,
  Humanitas,
  Poesia
} from '@/components/utils/LogosProyects'

export const ProjectsSlide = () => {

  const slides = [
    {
      contend: (
        <div className="w-full h-full flex items-center justify-center">
        <Link
          href={"https://1508.agency/"}
          target='_blank'
          className="flex items-center justify-center w-full h-full"
        >
          <Agency className='w-36 md:w-56' />
        </Link>
        </div>
      )
    },
    {
      contend: (
        <div className="w-full h-full flex items-center justify-center">
        <Link
          href={'https://cuarteldos.art/'}
          target='_blank'
          className="flex items-center justify-center w-full h-full"
        >
          <Cuartel className='w-36 md:w-56' />
        </Link>
        </div>
      )
    },
    {
      contend: (
        <div className="w-full h-full flex items-center justify-center">
        <Link
          href={'https://humanitasmuseum.art/'}
          target='_blank'
          className="flex items-center justify-center w-full h-full"
        >
          <Humanitas className='w-56 md:w-64' />
        </Link>
        </div>
      )
    },
    {
      contend: (
        <div className="w-full h-full flex items-center justify-center">
          <Link
            href={'https://poesiaycodigo.art/'}
            target='_blank'
            className="flex items-center justify-center w-full h-full"
          >
            <Poesia className='w-36 md:w-56' />
          </Link>
        </div>

      )
    },

  ]

  return (
    <div className="px-2 flex flex-col justify-center items-center
    h-full gap-3 md:p-8 md:gap-8 lg:gap-4">
      <p className="text-center md:text-[1.4rem] md:leading-normal md:px-4
      lg:text-lg lg:px-2">
        Estos son algunos de los proyectos en los que he aportado
        con código y soluciones tecnológicas.
      </p>
      <SliderImages slides={slides} />
    </div>
  )
}