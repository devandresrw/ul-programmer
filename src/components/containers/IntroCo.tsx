'use client'
import Intro from "@/components/utils/Intro"
import { useIntro } from "@/stores/useStoreIntro"


export default function ContainerIntro() {
  const { view } = useIntro()
  return (
    <>
      {view ? <Intro /> : null}
    </>
  )
}