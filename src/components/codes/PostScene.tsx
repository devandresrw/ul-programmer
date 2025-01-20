import {EffectComposer, Noise} from '@react-three/postprocessing'

export const PostScene = () => {
    return(
        <>
            <EffectComposer multisampling={8}
            autoClear={true}>
                <Noise opacity={0.02} />
            </EffectComposer>
        </>
    )
}