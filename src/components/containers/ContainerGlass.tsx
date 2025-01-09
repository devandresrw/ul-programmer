
interface GlassContainerProps {
  children: React.ReactNode;
}

export const ContainerGlass = ({ children }: GlassContainerProps) => {
  return (
    <div className="border-[1px] border-opacity-50 border-white
    rounded-xl w-full h-full glass">
      {children}
    </div>
  )
}