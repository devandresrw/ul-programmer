import { ReactNode } from 'react';
import { useStoreLayers } from '@/stores/useStoreLayers'

interface SectionProps {
  children: ReactNode;
}

export const SectionContend = ({ children }: SectionProps) => {
  const currentIndex = useStoreLayers(state => state.currentIndex);
  const nameIndex = useStoreLayers(state => state.nameIndex);

  return (
    <div className="h-[21rem] w-[18rem] md:h-[] md:w-[]
   border-white border-[1px] border-opacity-50
    rounded-lg z-50 ">
      <div className="relative z-20 ">
        <span className='absolute top-[-0.9rem] left-1/2 
        transform -translate-x-1/2 px-2 text-white
        text-lg bg-myblack tracking-[0.3em]'>
          {`[${nameIndex[currentIndex]}]`}
        </span>
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  )
}