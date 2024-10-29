'use client';

import { forwardRef, useContext } from 'react';
import { DoubleSide } from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useControls } from 'leva';

import { AnimationContext } from 'app/three-provider';
import { vertex } from '@/glsl/vertex';
import { fragment } from '@/glsl/fragment';

export const Points = forwardRef((props, ref) => {
    const { bloomRef, shaderRef } = useContext(AnimationContext);

    const whiteFlowerTexture = useTexture('/media/white-flower.jpg');
    const redFlowerTexture = useTexture('/media/red-flower.jpg');

    /**
     * Use leva controls
     */
    useControls({
        distortion: {
            value: 0.01,
            min: 0,
            max: 3,
            onChange: (v) => {
                shaderRef.current.uniforms.uDistortion.value = v;
            }
        },
        intensity: {
            value: 10,
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
        // shaderRef.current.uniforms.uTime.value += delta;

        // executes 1/frame, so we can just directly morph the ref with a delta
        // ref.current.rotation.x += 0.01;
        // ref.current.rotation.y += 0.02;
    })

    return (
        <points ref={ref} {...props}>
            <planeGeometry args={[608*1.665, 344*1.665, 608, 344]} />
            <shaderMaterial
              ref={shaderRef}
              extensions={{ derivatives: "#extension GL_OES_standard_derivatives : enable"}}
              uniforms={{
                  uDistortion: { value: 0 },
                  uProgress: { value: 1 },
                  uTexture: { value: whiteFlowerTexture },
                  uTime: { value: 0 }
              }}
              vertexShader={vertex}
              fragmentShader={fragment}
              side={DoubleSide}
              depthTest={false}
              wireframe={true}
              transparent
            />
        </points>
    )
})

Points.displayName = 'Points';