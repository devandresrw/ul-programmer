'use client'
import {useEffect, useState} from 'react'
import { Text } from '@react-three/drei'
import { VideoTexture } from 'three'
import { useMediaQuery} from 'react-responsive'


interface TextVideoProps {
   text: string
}

export const TextVideo = ({text}: TextVideoProps) => {

    const mobil = useMediaQuery({query: '(max-width: 425px)'})
    const tablet = useMediaQuery({query: '(max-width: 768px)'})
    const portatil = useMediaQuery({query: '(max-width: 1024px)'})
    const sizeFonr = () => {
        if(mobil){
            return 1
        }if(tablet){
            return 2
        }if(portatil){
            return 2.5
        }
        return 2.5
    } 

    const [video] = useState(()=> 
            Object.assign(document.createElement('video'),
            {
                src: '/video.mp4',
                crossOrigin: 'Anonymous',
                loop: true,
                muted: true,
            }))

    useEffect(() => void video.play(), [video])
    const videoTexture = new VideoTexture(video)
    
    return(
        <Text 
        font='/Jura-SemiBold.woff' 
        fontSize={sizeFonr()} 
        letterSpacing={-0.06} 
        position={[0,0,0]}>
            {text}
            <meshBasicMaterial toneMapped={false} map={videoTexture} />
        </Text>
    )
}