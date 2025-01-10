import {
  EffectComposer,
  Bloom,

} from '@react-three/postprocessing'

export const EffectComposerSettingss = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300} />
    </EffectComposer>
  )
}