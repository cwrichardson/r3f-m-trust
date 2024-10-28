export const fragment = /* glsl */ `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
        vec2 newUV = vPosition.xy/vec2(480., 820.);
        gl_FragColor = vec4(1., 0., 0., 1.);
        gl_FragColor = vec4(newUV, 0., 1.);
    }
`;