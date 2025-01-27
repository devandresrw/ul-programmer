import { Squares } from "@/components/codes/Squares";
import { SceneCodes } from "@/components";
import { CategoryButtons } from '@/components/codes/CategoryButtons'
import { FilteredCards } from '@/components/codes/FilteredCards'


const frontendCards = [
  {
      id: 1, 
      category: 'Newbie', 
      image: '/ceo.jpg', 
      title: 'NAme reto reto obvio', 
      description: 'lorem lorem', 
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: '',
      color: ''
  },
  {
      id: 1, 
      category: 'Junior', 
      image: '/ceo.jpg', 
      title: 'title', 
      description: 'lorem lorem', 
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: '',
      color: ''
  },
  {
      id: 1, 
      category: 'Intermediate', 
      image: '/ceo.jpg', 
      title: 'title', 
      description: 'lorem lorem', 
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: '',
      color: ''
  },
  {
      id: 1, 
      category: 'Advanced', 
      image: '/ceo.jpg', 
      title: 'title', 
      description: 'lorem lorem', 
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: '',
      color: ''
  },
  {
      id: 1, 
      category: 'Guru', 
      image: '/ceo.jpg', 
      title: 'title', 
      description: 'lorem lorem', 
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      link: '',
      color: ''
  },
];


export default function FrontendPage() {

  const categories = ['Newbie', 'Junior', 'Intermediate', 'Advanced', 'Guru'];

  return (
    <div className="relative">
      <Squares direction="diagonal" squareSize={70} />
      <div className="absolute w-full h-full inset-0 flex 
         flex-col justify-start items-center gap-10">
        <SceneCodes text='[ FRONT-END ]' styles='w-48 h-10 mt-5
          md:w-[40rem] md:h-24' />
        <div className="flex flex-col justify-center 
        items-center gap-2">
          <CategoryButtons categories={categories} />
          <FilteredCards cards={frontendCards}/>
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

<SpotlightCard
            className="px-4 py-4"
            spotlightColor="rgba(53, 100, 122, 0.25)">
          <p className='text-center text-base leading-[19px] w-[22rem] 
           rounded-lg font-black text-zinc-300'>
          Mis habilidades de frontend fueron puestas a prueba en los 
          siguientes retos, filtralos en niveles de dificultad, cada uno
          cuenta con una descripción y tecnologías utilizadas.
          </p>
          </SpotlightCard>


*/