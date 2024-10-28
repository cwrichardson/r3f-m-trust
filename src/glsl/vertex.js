export const vertex = /* glsl */ `
    uniform float uProgress;
    uniform sampler2D uTexture;
    uniform float uTime;
    attribute vec2 aCoords;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
        vUv = aCoords;
        vPosition = position;

        vec4 mvPosition = modelViewMatrix * vec4( position, 1. );
        // start with big particles; give them some perspective
        gl_PointSize = 100. * ( 1. / - mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
`;