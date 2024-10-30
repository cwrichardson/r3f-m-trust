'use client';

import { useContext } from 'react';
import { DoubleSide, Texture } from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import { useControls } from 'leva';

import { AnimationContext } from 'app/three-provider';
import { vertex } from '@/glsl/vertex';
import { fragment } from '@/glsl/fragment';

const CustomMaterial = shaderMaterial(
    {
        uDistortion: 0,
        uProgress: 1,
        uTexture: new Texture(),
        uTime: 0
    },
    vertex,
    fragment
);
extend({ CustomMaterial });

export function Points(props) {
    const { bloomRef, shaderRef } = useContext(AnimationContext);

    const whiteFlowerTexture = useTexture('/media/white-flower.jpg');
    const redFlowerTexture = useTexture('/media/red-flower.jpg');

    /**
     * Use leva controls
     */
    useControls({
        intensity: {
            value: 0,
            min: 0,
            max: 10,
            onChange: (v) => {
                if (bloomRef.current !== null) {
                    bloomRef.current.setIntensity(v);
                }
            }
        }
    });

    useFrame((state, delta, xrFrame) => {
        // do animation
        shaderRef.current.uTime += delta;

        // executes 1/frame, so we can just directly morph the ref with a delta
        // ref.current.rotation.x += 0.01;
        // ref.current.rotation.y += 0.02;
    })

    return (
        <points {...props}>
            <planeGeometry args={[608*1.665, 344*1.665, 608, 344]} />
            <customMaterial
              ref={shaderRef}
              key={CustomMaterial.key}
              uDistortion={0}
              uTexture={whiteFlowerTexture}
              uProgress={1}
              uTime={0}
              extensions={{ derivatives: "#extension GL_OES_standard_derivatives : enable"}}
              side={DoubleSide}
              depthTest={false}
              wireframe={true}
              transparent
            />
        </points>
    )
}