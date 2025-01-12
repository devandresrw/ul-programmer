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
          <Agency className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://cuarteldos.art/'}
          target='_blank'
        >
          <Cuartel className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://humanitasmuseum.art/'}
          target='_blank'
        >
          <Humanitas className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://poesiaycodigo.art/'}
          target='_blank'
        >
          <Poesia className='w-52' />
        </Link>
      )
    },

  ]

  return (
    <div className="p-4 flex flex-col justify-center items-center
    h-full gap-4">
      <p className="text-center">
        Estos son algunos de los proyectos en los que he aportado
        con código y soluciones tecnológicas.
      </p>
      <SliderImages slides={slides} />
    </div>
  )
}