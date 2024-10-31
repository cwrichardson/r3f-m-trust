'use client';

import dynamic from 'next/dynamic';
import { Suspense, useContext } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { AnimationContext } from 'app/three-provider';
import { Points } from '@/components/points';

const View = dynamic(() => import('src/components/view')
    .then((mod) => mod.View), {
        ssr: false
    }
);

export function Model(props) {
    const { bloomRef } = useContext(AnimationContext);

    return (
        <View orbit {...props}>
            <Suspense fallback={null}>
                <Points />
                <PerspectiveCamera
                  makeDefault
                  fov={70}
                  near={0.001}
                  far={5000}
                  position={[0, 0, 1500]}
                />

                  {/* <ambientLight intensity={0.5} />
                  <directionalLight intensity={0.5} position={[0.5, 0, 0.866]} /> {/* ~60º */}
            </Suspense>
            <Suspense fallback={null}>
                <EffectComposer disableNormalPass>
                    <Bloom
                        ref={bloomRef}
                        mipmapBlur
                        luminanceThreshold={0}
                        levels={2}
                        intensity={0}
                    />
                </EffectComposer>
            </Suspense>
        </View>
    )
}