import { Squares } from "@/components/codes/Squares";
import { SceneCodes } from "@/components";
import { CategoryButtons } from '@/components/codes/CategoryButtons'
import { FilteredCards } from '@/components/codes/FilteredCards'
import {frontendCards} from '@/data/frontend'

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
          <FilteredCards cards={frontendCards} />
        </div>
      </div>
    </div>
  )
}
