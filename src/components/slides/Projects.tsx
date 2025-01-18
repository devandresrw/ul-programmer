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
        <Link
          href={"https://1508.agency/"}
          target='_blank'
        >
          <Agency className='w-52 md:w-72' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://cuarteldos.art/'}
          target='_blank'
        >
          <Cuartel className='w-52 md:w-72' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://humanitasmuseum.art/'}
          target='_blank'
        >
          <Humanitas className='w-52 md:w-72' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://poesiaycodigo.art/'}
          target='_blank'
        >
          <Poesia className='w-52 md:w-72' />
        </Link>
      )
    },

  ]

  return (
    <div className="px-2 flex flex-col justify-center items-center
    h-full gap-3 md:p-8 md:gap-8">
      <p className="text-center md:text-[1.4rem] md:leading-normal md:px-4">
        Estos son algunos de los proyectos en los que he aportado
        con código y soluciones tecnológicas.
      </p>
      <SliderImages slides={slides} />
    </div>
  )
}