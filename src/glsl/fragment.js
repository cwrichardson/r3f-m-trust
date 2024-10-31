export const fragment = /* glsl */ `
    uniform float uProgress;
    uniform sampler2D uT1;
    uniform sampler2D uT2;
    varying vec2 vUv;

    void main() {
        // vec2 newUV = vPosition.xy/vec2(480., 820.) + vec2(0.5);
        // gl_FragColor = vec4(1., 0., 0., 1.);
        vec4 t1 = texture2D(uT1, vUv);
        vec4 t2 = texture2D(uT2, vUv);
        vec4 finalTexture = mix(t1, t2, uProgress);
        // gl_FragColor = vec4(vUv, 0., 1.);
        // gl_FragColor = vec4(1., 1., 1., 1.);
        gl_FragColor = finalTexture;
        if (gl_FragColor.r < 0.1 && gl_FragColor.g<0.1 && gl_FragColor.b<0.1) discard;
    }
`;