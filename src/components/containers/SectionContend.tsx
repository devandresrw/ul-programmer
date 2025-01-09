import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export const SectionContend = ({ children }: SectionProps) => {
  return (
    <div className="w-[300px] h-[300px] border-2 border-white
    rounded-lg ">
      {children}
    </div>
  )
}