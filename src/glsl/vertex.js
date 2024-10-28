import { CURL_NOISE_WITH_DEPS } from './noise';

export const vertex = CURL_NOISE_WITH_DEPS + /* glsl */ `
    uniform float uProgress;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
        vUv = uv;

        vec3 distortion = vec3(position.x * 2., position.y, 1.) * curl_noise(vec3(
            position.x*0.02,
            position.y*0.008,
            uTime * 0.01
        ));
        vec3 finalPosition = position + distortion;

        vec4 mvPosition = modelViewMatrix * vec4( finalPosition, 1. );
        // start with big particles; give them some perspective
        gl_PointSize = 100. * ( 1. / - mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;