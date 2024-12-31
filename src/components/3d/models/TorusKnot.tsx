
import { Mesh, MeshStandardMaterial, Group } from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material_0: Mesh
    TorusKnot_Material001_0: Mesh
  }
  materials: {
    ['Material.002']: MeshStandardMaterial
  }
}


export function Model(props: JSX.IntrinsicElements['group']) {

  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF('/torusknot.glb') as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="76930877c7ac4ced8b060d9778485d3ffbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  position={[18.197, -95.363, 248.414]}
                  rotation={[-1.563, -0.007, -0.688]}
                  scale={48.764}>
                  <mesh
                    name="Sphere_Material_0"
                    geometry={nodes.Sphere_Material_0.geometry}
                    material={materials['Material.002']}
                  />
                </group>
                <group name="TorusKnot" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="TorusKnot_Material001_0"
                    geometry={nodes.TorusKnot_Material001_0.geometry}
                    material={nodes.TorusKnot_Material001_0.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/torusknot.glb')
