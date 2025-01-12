import { useState, useEffect } from 'react'
import MyImage from '@/components/utils/MyImage'
import Link from 'next/link'

interface SliderProps {
  src: string[]
  links: string[]
}

export const SliderImages = ({ src, links }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % src.length)
    }, 3000)
    return () => clearInterval(interval)
  },)

  return (
    <div className="relative w-full p-2 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {src.map((image, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <Link href={links[index]}>
              <MyImage
                src={image}
                alt={`Slide ${index}`}
                styles="w-full h-full object-cover"
                height={100}
                width={50}
                key={index}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {src.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}