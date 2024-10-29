'use client';

import { useRef } from 'react';
import gsap from 'gsap';

import { panda } from 'styled-system/jsx';

export function ActiveVideo() {
    const videoRef = useRef();

    function handleEnd() {
        gsap.to(videoRef.current, {
            duration: 0.1,
            opacity: 0
        })
    }

    // // Convert vertical FOV (70) to radians
    // const FOV = 70 * Math.PI / 180
    // // calculate height ratio given camera distance (1500)
    // const heightRatio = 2 * Math.tan(FOV / 2) * 1500;
    // // calculate height given object height (344)
    // const height = 344 / heightRatio;

    return (
        <panda.div
            pos={'absolute'} 
            top={'50%'} 
            left={'50%'}
            translate={'auto'}
            translateX={'-50%'}
            translateY={'-50%'}
            zIndex={'1000'}
            // style={{ '--height-ratio': height }}
            // height={'calc(var(--height-ratio) * 100vh)'}
            // these are hardcoded in the video, but they probably should be
            // somehow calulcated, either like above or using
            // PerspectiveCamera.getViewSize()
            h={'27.27vh'}
            w={'calc(608 / 344 * 27.27vh)'}
        >
            <panda.video
                ref={videoRef}
                src='/media/white flower.mp4'
                w={'full'}
                h={'full'}
                autoPlay
                muted
                onEnded={handleEnd}
            />
        </panda.div>
    )
}