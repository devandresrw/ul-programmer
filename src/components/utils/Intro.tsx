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
    <div ref={refContainer} className="flex flex-col items-center justify-center gap-5">
      <div ref={refImg} className="opacity-0">
        <Imga
          src="/a-blanca.svg"
          alt="image"
          width={100}
          height={100}
          styles=""
        />
      </div>
      <div className="flex itens-center justify-center gap-5 text-white">
        <span ref={refText1} className="opacity-0">#FrontendEnginer</span>
        <span ref={refText2} className="opacity-0">#HxC</span>
        <span ref={refText3} className="opacity-0">#CreativeDeveloper</span>
      </div>
    </div>
  )
}