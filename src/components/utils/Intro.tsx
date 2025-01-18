'use client'
import dynamic from "next/dynamic"
import { useAnimIntro } from "@/hooks/useAnimIntro"

const Imga = dynamic(() => import("@/components/utils/MyImage"), {
  loading: () => <p>Loading...</p>,
  ssr: true
})

export default function Intro() {

  const {
    refContainer,
    refImg,
    refText1,
    refText2,
    refText3 } = useAnimIntro()

  return (
    <div ref={refContainer} className="bg-myblack absolute 
    flex flex-col items-center justify-center gap-10 z-50 h-screen w-screen">
      <div ref={refImg} className="opacity-0 w-28 h-28">
        <Imga
          src="/a-blanca.svg"
          alt="image"
          width={100}
          height={100}
          styles="w-auto h-auto"
        />
      </div>
      <div className="flex flex-col itens-center justify-center gap-5 text-white
      md:flex-row text-center">
        <span ref={refText1} className="opacity-0">#FrontendEnginer</span>
        <span ref={refText2} className="opacity-0">#HxC</span>
        <span ref={refText3} className="opacity-0">#CreativeDeveloper</span>
      </div>
    </div>
  )
}