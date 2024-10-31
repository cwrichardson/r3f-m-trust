'use client';

import { useContext } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 

import { panda } from 'styled-system/jsx';
import { AnimationContext } from 'app/three-provider';

export function ActiveVideo() {
    const {
        bloomRef,
        shaderRef,
        videoRef,
        video2Ref
    } = useContext(AnimationContext);
    gsap.registerPlugin(useGSAP);
    const { contextSafe } = useGSAP();

    // let GSAP control intensity
    const bloomIntensity = { value: 0 };

    const handleEnd = contextSafe(() => {
        const distortionTl = gsap.timeline()
        const bloomTl = gsap.timeline()

        distortionTl.to(shaderRef.current, {
            duration: 2,
            uDistortion: 1.4,
            ease: "power2.in"
        })
        .to(shaderRef.current, {
            duration: 2,
            uDistortion: 0,
            ease: "expo.in"
        })
        .to(video2Ref.current, {
            duration: 0.1,
            opacity: 1,
            onComplete: () => {
                video2Ref.current.play()
            }
        })

        bloomTl.to(bloomIntensity, {
            duration: 2,
            value: 7,
            ease: "power2.in",
            onUpdate: () => {
                bloomRef?.current?.setIntensity(bloomIntensity.value)
            }
        })
        .to(bloomIntensity, {
            duration: 2,
            value: 0,
            ease: "expo.in",
            onUpdate: () => {
                bloomRef?.current?.setIntensity(bloomIntensity.value)
            }
        })

        gsap.to(videoRef.current, {
            duration: 0.1,
            opacity: 0
        })
        distortionTl.play(true);
        bloomTl.play(true);
        gsap.to(shaderRef.current, {
            duration: 1,
            uProgress: 1,
            delay: 1.5,
            ease: 'power2.in'
        })

    })

    // // Convert vertical FOV (70) to radians
    // const FOV = 70 * Math.PI / 180
    // // calculate height ratio given camera distance (1500)
    // const heightRatio = 2 * Math.tan(FOV / 2) * 1500;
    // // calculate height given object height (344)
    // const height = 344 / heightRatio;

    return (
        <>
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
            <panda.div
                pos={'absolute'} 
                top={'50%'} 
                left={'50%'}
                translate={'auto'}
                translateX={'-50%'}
                translateY={'-50%'}
                zIndex={'1000'}
                h={'27.27vh'}
                w={'calc(608 / 344 * 27.27vh)'}
            >
                <panda.video
                    ref={video2Ref}
                    src='/media/red flower.mp4'
                    w={'full'}
                    h={'full'}
                    opacity={0}
                    muted
                />
            </panda.div>
        </>
    )
}