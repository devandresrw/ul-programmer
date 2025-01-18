import TorusKnots from './TorusKnot'

export const ContainersModel = () => {

  return (
    <group>
        <TorusKnots numx={2} numy={3} numz={1} p={2} position={[1, 1, 1]} q={1} radialSegments={2} radius={4} rotation={[1, 1, 1]} tube={2} tubularSegments={2} key={6} />
    </group>
  )
}