'use client';

import { forwardRef, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { DoubleSide } from 'three';

import { vertex } from '@/glsl/vertex';
import { fragment } from '@/glsl/fragment';
import { useControls } from 'leva';

export const Points = forwardRef((props, ref) => {
    const { vertices, positions } = props;
    const shaderRef = useRef();

    /**
     * Use leva controls
     */
    const { progress } = useControls({
        progress: {
            value: 1,
            min: 0,
            max: 1,
            onChange: (v) => {
                shaderRef.current.uniforms.uProgress.value = v;
            }
        }
    })

    useFrame((state, delta, xrFrame) => {
        // do animation
        // shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;

        // executes 1/frame, so we can just directly morph the ref with a delta
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.02;
    })

    return (
        <points ref={ref}>
            <bufferGeometry
              width={1}
              height={1}
              widthSegments={1}
              heightSegments={1}
            >
                <bufferAttribute attach={'attributes-position'} args={[vertices, 3]} />
                <bufferAttribute attach={'attributes-aCoords'} args={[positions, 2]} />
            </bufferGeometry>
            <shaderMaterial
              ref={shaderRef}
              extensions={{ derivatives: "#extension GL_OES_standard_derivatives : enable"}}
              uniforms={{
                  uProgress: { value: 1 },
                  uTime: { value: 0 }
              }}
              vertexShader={vertex}
              fragmentShader={fragment}
              side={DoubleSide}
              depthTest={false}
              transparent
            />
        </points>
    )
})

Points.displayName = 'Points';