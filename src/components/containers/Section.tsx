import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <div className="">
      {children}
    </div>
  )
}