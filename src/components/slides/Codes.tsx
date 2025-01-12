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
    h-full gap-4">
      <p className="text-center">
        Algunos proyectos que puedes ver para verificar mi nivel de
        desarrollo tanto en front-end y back-end.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <Link href={'/codes'} className='text-center'>
          <span>Front-end</span>
          <div className="border-[1px] border-opacity-50 border-white
          rounded-md p-3 w-full flex flex-row justify-center items-center gap-2">
            <FaReact size={25} />
            <SiTypescript size={25} />
            <SiNextdotjs size={25} />
            <SiThreedotjs size={25} />
            < RiTailwindCssFill size={25} />
          </div>
        </Link>

        <Link href={'/codes'} className='text-center'>
          <span>Back-end</span>
          <div className="border-[1px] border-opacity-50 border-white
          rounded-md p-3 w-full flex flex-row justify-center items-center gap-2">
            <SiNestjs size={25} />
            <SiReactivex size={25} />
            <FaNode size={25} />
            <FaDocker size={25} />
            <BiLogoPostgresql size={25} />
          </div>
        </Link>
      </div>
    </div>
  )
}