import { useStoreLayers } from '@/stores/useStoreLayers'
import Box from './BoxGeometry'
import Cone from './ConeGeometry'
import Lathe from './LatheGeometry'
import Octahedron from './OctahedronGeometry'
import Poly from './PolyGeometry'
import Ring from './RingGeometry'
import Torus from './TorusGeometry'
import TorusKnots from './TorusKnot'

const geometries = [
  <Box numx={9} numy={2} position={[1, 2, 3]} size={[2, 2, 2]} key={1} />,
  <Cone height={2} numx={23} numy={23} numz={23} position={[1, 2, 3]} radialSegments={2} radius={2} rotation={[2, 3, 4]} key={2} />,
  <Lathe numx={2} numy={4} position={[2, 3, 4]} key={3} />,
  <Octahedron numx={23} numy={3} numz={1} position={[1, 2, 3]} size={1} key={4} />,
  <Poly numx={3} numy={4} position={[1, 3, 4]} size={[2, 3, 4]} key={5} />,
  <Ring innerRadius={2} numx={3} numy={3} numz={3} outerRadius={3} phiSegments={3} position={[1, 2, 3]} rotation={[1, 2, 3]} thetaSegments={3} key={5} />,
  <Torus numx={3} numy={4} numz={5} position={[1, 2, 3]} size={[1, 2, 3, 4]} key={6} />,
  <TorusKnots numx={2} numy={3} numz={1} p={2} position={[1, 1, 1]} q={1} radialSegments={2} radius={4} rotation={[1, 1, 1]} tube={2} tubularSegments={2} key={6} />
]

export const ContainersModel = () => {
  const currentIndex = useStoreLayers((state) => state.currentIndex)

  return (
    <group>
      {geometries[currentIndex]}
    </group>
  )
}