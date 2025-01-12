import { SliderImages } from '@/components/utils/SliderImages'

export const DjosSlide = () => {
  const srcImages = [
    './djos/codewars.svg',
    './djos/freecodecamp.svg',
    './djos/frontendmentor.svg',
    './djos/hackthebox.svg'
  ]
  const links = [
    'https://google.com',
    'https://google.com',
    'https://google.com',
    'https://google.com',
  ]

  return (
    <div className="p-4 flex flex-col justify-center items-center
    h-full">
      <p>Entreno y valido mis habilidaes constantemente
        desde mi algoritmia hasta mis habilidaes en ciberseguridad.
      </p>
      <SliderImages src={srcImages} links={links} />
    </div>
  )
}