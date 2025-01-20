'use client'
import {useEffect, useState} from 'react'
import { Text } from '@react-three/drei'
import { VideoTexture } from 'three'

interface TextVideoProps {
    mes
}

export const TextVideo = () => {
    const [video] = useState(()=> 
            Object.assign(document.createElement('video'),
            {
                src: '/video.mp4',
                crossOrigin: 'Anonymous',
                loop: true,
                muted: true,
            }))
    useEffect(() => void video.play, [video])
    const videoTexture = new VideoTexture(video)
    
    return(
        <Text font='' fontSize={} letterSpacing={} position={}>
            {}
        </Text>
    )
}