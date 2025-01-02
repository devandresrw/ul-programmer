import { OrthographicCamera } from '@react-three/drei'

export const ConfigScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} castShadow />
      <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={30} />
    </>
  )
}