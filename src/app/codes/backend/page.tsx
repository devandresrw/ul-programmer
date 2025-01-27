import { Squares } from "@/components/codes/Squares";
import { SceneCodes } from "@/components";
import { SpotlightCard } from "@/components/codes/PixelCard";
import { CategoryButtons } from '@/components/codes/CategoryButtons'
import { FilteredCards } from '@/components/codes/FilteredCards'

export default function BackendPage() {

  const categories = ['Newbie', 'Junior', 'Intermediate', 'Advanced', 'Guru'];

  return (
    <div className="relative">
      <Squares direction="diagonal" squareSize={70} />
      <div className="absolute w-full h-full inset-0 flex 
         flex-col justify-start items-center gap-5 md:gap-8">
          <SceneCodes text='[ BACK-END ]' styles='w-48 h-10 mt-5
          md:w-[40rem] md:h-24' />
        <div className="flex flex-col justify-center items-center" >
          <CategoryButtons categories={categories} />
          <FilteredCards />
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