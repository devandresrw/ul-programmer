import { Squares } from "@/components/codes/Squares";
import { SceneCodes } from "@/components";
import { SpotlightCard} from "@/components/codes/PixelCard";
import Link from 'next/link'
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


export default function CodePage() {
  return(
    <div className="relative">
        <Squares />
        <div className=" absolute w-full h-full inset-0 flex justify-center items-start">
        <div className="mt-10 botder-2 border-gray-300
      flex flex-col justify-center items-center gap-2">
          <SceneCodes text='[ DEV_CODES ]' styles='' />  
          <SpotlightCard
            className="px-4 py-4"
            spotlightColor="rgba(53, 100, 122, 0.25)"
          >
          <p className='text-center text-base leading-[19px] w-[22rem] 
           rounded-lg font-black text-zinc-300'>
          Aquí encontrarás una colección de proyectos de 
          desarrollo web que muestran mi experiencia en 
          crear soluciones completas, desde el frontend 
          hasta el backend. Explora cómo utilizo tecnologías
           como React, Next JS, y Nest JS para dar vida a
            ideas innovadoras y resolver problemas del mundo real.
          </p>
          </SpotlightCard>
          <div className="flex justify-center items-center gap-2">
              <Link href={'/codes/frontend'} className='text-center'>
              <SpotlightCard
              className="px-3 py-3 "
              spotlightColor="rgba(97, 151, 165, 0.25)"
             >
              <span className="text-center">Front-end</span>
              <div className="grid grid-rows-2 place-items-center gap-2">
              <FaReact size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
              <SiTypescript size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7" />
              <SiNextdotjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
              <SiThreedotjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
              <RiTailwindCssFill size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
             
              </div>
              </SpotlightCard> 
              </Link>
             <Link href={'/codes/backend'} >
             <SpotlightCard 
                className="px-3 py-1"
                spotlightColor="rgba(174, 80, 97, 0.25)"
              >
              <span>Back-end</span>
              <div className="">
              <SiNestjs size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <SiReactivex size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <FaNode size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
            <FaDocker size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7" />
            <BiLogoPostgresql size={25} className="md:w-10 md:h-10 lg:w-7 lg:h-7"/>
          
              </div>
              </SpotlightCard>
             </Link>
           
          </div>
      </div>
        </div>
    </div>
         
  )
}

/*
import {SceneCodes} from '@/components'


export default function CodePage() {
  return (
    <div className="flex justify-center">
      <div className="mt-10 botder-2 border-gray-300
      flex flex-col justify-center items-center gap-10">
          <SceneCodes text='[ DEV_CODES ]' styles='' />  
          <p className='text-center text-base w-[28rem]'>
          Aquí encontrarás una colección de proyectos de 
          desarrollo web que muestran mi experiencia en 
          crear soluciones completas, desde el frontend 
          hasta el backend. Explora cómo utilizo tecnologías
           como React, Next JS, y Nest JS para dar vida a
            ideas innovadoras y resolver problemas del mundo real.
          </p>
      </div>
      <div className="">

      </div>
    </div>
  )
}



*/