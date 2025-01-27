'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { SceneConfig, PostScene, TextVideo } from '@/components'

interface SceneCodesProps {
    text: string
    styles?: string
}

export const SceneCodes = ({ text, styles }: SceneCodesProps) => {
    return (
        <div className={styles}>
            <Suspense>
                <Canvas flat shadows
                    dpr={[1, 1.5]}
                    gl={{
                        antialias: true,
                        powerPreference: 'low-power'
                    }}
                    className='w-full h-full'
                    >
                    <Suspense>
                        <SceneConfig />
                        <PostScene />
                        <group>
                            <TextVideo text={text} />
                        </group>
                    </Suspense>
                </Canvas>
            </Suspense>
        </div>
    )
}