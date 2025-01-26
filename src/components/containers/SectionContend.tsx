import { ReactNode } from 'react';
import { useStoreLayers } from '@/stores/useStoreLayers'


interface SectionProps {
  children: ReactNode;
}

export const SectionContend = ({ children }: SectionProps) => {
  const currentIndex = useStoreLayers(state => state.currentIndex);
  const nameIndex = useStoreLayers(state => state.nameIndex);

  return (
    <div className={`
      h-[21rem] w-[18rem] md:h-[25rem] md:w-[26rem]
      lg:w-[27rem] lg:h-[16rem]
   border-white border-[1px] border-opacity-30
    rounded-lg z-50
    `}>
      <div className="relative z-20 ">
        <span className='absolute top-[-1.4rem] left-1/2 
        transform -translate-x-1/2 px-2 py-1 text-black
        rounded-lg text-lg glassSpan tracking-[0.3em] z-50
        text-center'>
          {`[${nameIndex[currentIndex]}]`}
        </span>
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  )
}