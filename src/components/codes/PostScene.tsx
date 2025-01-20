'use client'
import {EffectComposer,
    Glitch
} from '@react-three/postprocessing'
import { Vector2 } from 'three'

export const PostScene = () => {
    return(
        <>
            <EffectComposer multisampling={8}
            autoClear={true}>
               <Glitch delay={new Vector2(1)} 
               chromaticAberrationOffset={new Vector2(2)}
               duration={new Vector2(0.1)}/> 
            </EffectComposer>
        </>
    )
}