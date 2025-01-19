import { ReactNode } from 'react';
import { useStoreLayers } from '@/stores/useStoreLayers'
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
}

export const SectionContend = ({ children }: SectionProps) => {
  const currentIndex = useStoreLayers(state => state.currentIndex);
  const nameIndex = useStoreLayers(state => state.nameIndex);

  return (
    <div className={clsx(`
      h-[21rem] w-[18rem] md:h-[30rem] md:w-[35.5rem]
    lg:w-[40%] lg:h-[22rem]
   border-white border-[1px] border-opacity-30
    rounded-lg z-50
    `,{
      [`lg:mb-5 xl:mb-0`]: currentIndex === 0,
    })}>
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