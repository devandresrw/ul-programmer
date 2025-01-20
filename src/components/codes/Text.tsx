'use client'
import {useEffect, useState} from 'react'
import { Text } from '@react-three/drei'
import { VideoTexture } from 'three'

interface TextVideoProps {
   text: string
}

export const TextVideo = ({text}: TextVideoProps) => {
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
        fontSize={2} 
        letterSpacing={-0.06} 
        position={[0,0,0]}>
            {text}
            <meshBasicMaterial toneMapped={false} map={videoTexture} />
        </Text>
    )
}