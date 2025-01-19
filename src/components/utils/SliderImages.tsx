import { useState, useEffect, ReactNode } from 'react'

interface Slide {
  contend: ReactNode;
}

interface SliderProps {
  slides: Slide[];
}

export const SliderImages = ({ slides }: SliderProps) => {
  const [slide, setSlide] = useState(0)

  const handleClick = (index: number) => {
    setSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide) => (slide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      <div className='relative h-20 flex justify-center items-center'>
        {
          slides.map((item, index) => (
            <div
              className={`
              absolute inset-0 transition-opacity duration-1000
              ease-in-out flex justify-center items-center
              ${index === slide ? 'opacity-100' : 'opacity-0'}  
              `}
              key={index}>
              {item.contend}
            </div>
          ))
        }
      </div>
      <div className='flex justify-center md:mt-7 lg:mt-4'>
        {
          slides.map((_, index) => (
            <span
              key={index}
              className={`
              w-3 h-3 mx-1 rounded-full cursor-pointer
              ${index === slide
                  ? "border border-white/50"
                  : "border border-white/80"}  
              `}
              onClick={() => handleClick(index)}
            >
            </span>
          ))

        }
      </div>
    </div>
  )
}