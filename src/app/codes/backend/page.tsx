import { Squares } from "@/components/codes/Squares";
import { SceneCodes } from "@/components";
import { CategoryButtons } from '@/components/codes/CategoryButtons'
import { FilteredCards } from '@/components/codes/FilteredCards'

const backendCards = [
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
          <FilteredCards cards={backendCards} />
        </div>
      </div>
    </div>

  )
}

