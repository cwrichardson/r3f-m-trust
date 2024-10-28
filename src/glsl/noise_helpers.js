export const MOD289 = /* glsl */ `
    vec3 mod289(vec3 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
`

export const PERMUTE = /* glsl */ `
    vec4 permute(vec4 x)
    {
        return mod289(((x*34.0)+10.0)*x);
    }
`

export const TAYLOR_INV_SQRT = /* glsl */ `
    vec4 taylorInvSqrt(vec4 r)
    {
        return 1.79284291400159 - 0.85373472095314 * r;
    }
`

export const FADE = /* glsl */ `
    vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }
`