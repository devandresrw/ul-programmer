import {
  EffectComposer,
  Bloom,
  Scanline
} from '@react-three/postprocessing'

export const EffectComposerSettingss = () => {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300} />
      <Scanline
        density={1}

      />
    </EffectComposer>
  )
}