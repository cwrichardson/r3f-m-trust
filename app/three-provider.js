'use client';

import { createContext, useRef } from 'react';

import { Box } from 'styled-system/jsx';
import { Scene } from '@/components/scene';

export const AnimationContext = createContext(null);

export function ThreeProvider({ children }) {
    const ref = useRef();
    const videoRef = useRef();
    const video2Ref = useRef();
    const shaderRef = useRef();
    const bloomRef = useRef();

    return (
        <Box
          ref={ref}
          pos={'relative'}
          w={'full'}
          h={'full'}
          overflow={'auto'}
          touchAction={'auto'}
        >
          <AnimationContext.Provider value={{
            videoRef,
            video2Ref,
            shaderRef,
            bloomRef
          }}>
            {children}
            <Scene
              pos={'fixed'}
              top={'0'}
              left={'0'}
              w={'100vw'}
              h={'100vh'}
              zIndex={'background'}
              pointerEvents={'none'}
              eventSource={ref}
              eventPrefix={'client'}
            />
          </AnimationContext.Provider>
        </Box>
    )
}