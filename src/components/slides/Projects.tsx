import { SliderImages } from "@/components/utils/SliderImages"
import Link from 'next/link'
import {
  CodeWars,
  FreeCodeCamp,
  FrontendMentor,
  HackTheBox,
  HackerRank
} from '@/components/utils/LogosDjos'

export const ProjectsSlide = () => {

  const slides = [
    {
      contend: (
        <Link
          href={"https://www.codewars.com/users/devandresrw"}
          target='_blank'
        >
          <CodeWars className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.freecodecamp.org/andresrw'}
          target='_blank'
        >
          <FreeCodeCamp className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.frontendmentor.io/profile/amporabipo'}
          target='_blank'
        >
          <FrontendMentor className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'hackthebox.com/'}
          target='_blank'
        >
          <HackTheBox className='w-52' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.hackerrank.com/profile/aroldan0'}
          target='_blank'
        >
          <HackerRank className='w-52' />
        </Link>
      )
    }
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