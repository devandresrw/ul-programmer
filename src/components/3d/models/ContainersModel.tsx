import { useStoreLayers } from '@/stores/useStoreLayers'
import Box from './BoxGeometry'
import Cone from './ConeGeometry'
import Lathe from './LatheGeometry'
import Octahedron from './OctahedronGeometry'
import Poly from './PolyGeometry'
import Ring from './RingGeometry'
import Torus from './TorusGeometry'
import TorusKnots from './TorusKnot'
import { Vector2 } from 'three'


const geometries = [
  <Torus numx={0.0} numy={0.0} numz={0.003} position={[0, 0, 3]} size={[5, 4, 22, 74, 6.283]} key={6} />,
  <Lathe
    numx={0}
    numy={0.003}
    numz={0}
    args={[[new Vector2(10, 10), new Vector2(2, 0)], 40, 120, 20]}
    position1={[10, 0, 1]}
    position2={[-10, 0, 1]}
    position3={[-10, 0, 1]}
    position4={[10, 0, 1]}
    rotation1={[0, 0, 0]}
    rotation2={[0, 0, 0]}
    rotation3={[0, 0, 3.15]}
    rotation4={[0, 0, 3.15]}
    key={3} />,
  <Octahedron numx={0} numy={0} numz={0.01} position={[0, 0, 1]} size={[12, 3]} key={4} />,
  <Poly numx={0} numy={0} numz={0.01} position={[0, 0, 1]} size={[8, 3, 4]} key={5} />,

  <Cone height={2} numx={23} numy={23} numz={23} position={[1, 2, 3]} radialSegments={2} radius={2} rotation={[2, 3, 4]} key={2} />,
  <Box numx={0.01} numy={0.01} position={[0, 0, 5]} size={[30, 30, 30]} key={1} />,
  <Ring innerRadius={2} numx={3} numy={3} numz={3} outerRadius={3} phiSegments={3} position={[1, 2, 3]} rotation={[1, 2, 3]} thetaSegments={3} key={5} />,
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