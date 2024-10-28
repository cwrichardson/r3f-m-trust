export const fragment = /* glsl */ `
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
        // vec2 newUV = vPosition.xy/vec2(480., 820.) + vec2(0.5);
        // gl_FragColor = vec4(1., 0., 0., 1.);
        vec4 texture = texture2D(uTexture, vUv);
        if (texture.r < 0.1 && texture.g<0.1 && texture.b<0.1) discard;
        // gl_FragColor = vec4(vUv, 0., 1.);
        // gl_FragColor = vec4(1., 1., 1., 1.);
        gl_FragColor = texture;
    }
`;