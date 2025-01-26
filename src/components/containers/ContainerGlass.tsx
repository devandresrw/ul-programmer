import clsx from 'clsx';
import {useStoreLayers} from '@/stores/useStoreLayers'

interface GlassContainerProps {
  children: React.ReactNode;
}

export const ContainerGlass = ({ children }: GlassContainerProps) => {
  const currentIndex = useStoreLayers(state => state.currentIndex);
  return (
    <div className={clsx(`
      border-[1px] border-opacity-50 border-white
    rounded-xl w-full h-full glass animate-fadeIn
    flex justify-center items-center px-6`,{
     // [`flex  justify-center items-center lg:justify-center lg:items-center xl:items-center `]: currentIndex === 0,
     // [`flex justify-center items-center`]: currentIndex >= 1,
    })
    }>
      {children}
    </div>
  )
}