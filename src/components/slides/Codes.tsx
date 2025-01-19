import Link from 'next/link'
/*
 FaReact,
  SiTypescript,
  SiNextdotjs,
 SiThreedotjs,
 RiTailwindCssFill

 SiNestjs,
 SiReactivex,
 FaNode,
  FaDocker,
  BiLogoPostgresql
*/
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiReactivex,
  SiThreedotjs
} from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'
import {
  FaNode,
  FaDocker,
  FaReact,
} from 'react-icons/fa'

export const CodesSlide = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center
    h-full gap-4 lg:gap-1">
      <p className="text-center md:text-[1.4rem] md:leading-normal md:px-4
      lg:text-lg" >
        Algunos proyectos que puedes ver para verificar mi nivel de
        desarrollo tanto en front-end y back-end.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2
      md:gap-5">
        <Link href={'/codes'} className='text-center'>
          <span className='md:text-[1.4rem] md:leading-normal md:px-4 lg:text-lg'>Front-end</span>
          <div className="border-[1px] border-opacity-50 border-white
          rounded-md p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 
          gap-4 w-full place-items-center md:mt-3 lg:mt-1 lg:gap-3">
            <FaReact size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <SiTypescript size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7" />
            <SiNextdotjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <SiThreedotjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            < RiTailwindCssFill size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
          </div>
        </Link>

        <Link href={'/codes'} className='text-center'>
          <span className='md:text-[1.4rem] md:leading-normal md:px-4 lg:text-lg'>Back-end</span>
          <div className="border-[1px] border-opacity-50 border-white
          rounded-md p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 
          gap-4 w-full place-items-center md:mt-3 lg:mt-1">
            <SiNestjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <SiReactivex size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <FaNode size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <FaDocker size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7" />
            <BiLogoPostgresql size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
          </div>
        </Link>
      </div>
    </div>
  )
}