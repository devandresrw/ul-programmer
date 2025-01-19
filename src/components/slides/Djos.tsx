import { SliderImages } from '@/components/utils/SliderImages'
import Link from 'next/link'
import {
  CodeWars,
  FreeCodeCamp,
  FrontendMentor,
  HackTheBox,
  HackerRank
} from '@/components/utils/LogosDjos'

export const DjosSlide = () => {

  const slides = [
    {
      contend: (
        <Link
          href={"https://www.codewars.com/users/devandresrw"}
          target='_blank'>
          <CodeWars className='w-52 md:w-72 lg:w-56' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.freecodecamp.org/andresrw'}
          target='_blank'
        >
          <FreeCodeCamp className='w-52 md:w-72 lg:w-56' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.frontendmentor.io/profile/amporabipo'}
          target='_blank'
        >
          <FrontendMentor className='w-52 md:w-72 lg:w-56' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'hackthebox.com/'}
          target='_blank'
        >
          <HackTheBox className='w-52 md:w-72 lg:w-56' />
        </Link>
      )
    },
    {
      contend: (
        <Link
          href={'https://www.hackerrank.com/profile/aroldan0'}
          target='_blank'
        >
          <HackerRank className='w-52 md:w-72 lg:w-56' />
        </Link>
      )
    }

  ]

  return (
    <div className="p-4 flex flex-col justify-center items-center
    h-full gap-3 md:p-8 md:gap-8 lg:gap-3">
      <p className='text-center md:text-[1.4rem] md:leading-normal md:px-4
      lg:text-lg lg:px-1'>Entreno y valido mis habilidaes constantemente
        desde mi algoritmia hasta mis habilidaes en ciberseguridad.
      </p>
      <SliderImages slides={slides} />
    </div>
  )
}