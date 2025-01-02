'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useIntro } from '@/stores/useStoreIntro'

export const useAnimIntro = () => {

  const { preHiden } = useIntro()

  const refContainer = useRef<HTMLDivElement>(null)
  const refImg = useRef<HTMLDivElement>(null)
  const refText1 = useRef<HTMLSpanElement>(null)
  const refText2 = useRef<HTMLSpanElement>(null)
  const refText3 = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline(
      {
        onComplete: () => {
          preHiden()
        },
        defaults: { duration: 0.6, ease: 'power3.out' }
      }
    )

    tl.to(refContainer.current, { opacity: 1 })
      .to(refImg.current, { opacity: 1 })
      .to(refText1.current, { opacity: 1 })
      .to(refText2.current, { opacity: 1 })
      .to(refText3.current, { opacity: 1 })
      .to(refText1.current, { opacity: 0 })
      .to(refText2.current, { opacity: 0 })
      .to(refText3.current, { opacity: 0 })
      .to(refText1.current, { opacity: 1 })
      .to(refText2.current, { opacity: 1 })
      .to(refText3.current, { opacity: 1 })
      .to(refText1.current, { opacity: 0 })
      .to(refText2.current, { opacity: 0 })
      .to(refText3.current, { opacity: 0 })
      .to(refImg.current, { opacity: 1 })

  })

  return {
    refContainer,
    refImg,
    refText1,
    refText2,
    refText3
  }
}