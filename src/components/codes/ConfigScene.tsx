import {OrthographicCamera, OrbitControls} from '@react-three/drei'

export const SceneConfig = () => {
    return(
        <>
            <ambientLight intensity={0.5} />
            <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={35} />
            <directionalLight position={[0, 0, 5]} intensity={1} castShadow />
            <OrbitControls 
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 3}
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minDistance={5}
                maxDistance={20}
            />
        </>
    )
}