import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {SceneConfig, PostScene} from '@/components'

export const SceneCodes = () => {
    return(
        <Suspense>
            <Canvas flat shadows
            dpr={[1,1.5]}
            gl={{
                antialias: true,
                powerPreference: 'low-power'
            }}
        >
            <color attach={'background'} args={['#18191A']} />
            <Suspense>
                <SceneConfig />
                <PostScene />
                <group>
                    
                </group>
            </Suspense>
        </Canvas>
        </Suspense>
        
    )
}