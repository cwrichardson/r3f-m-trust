# References
Yuri Artiukh's YouTube
["Video exploding to particles, m-trust.co.jp with Three.js and WebGL #44"][1]
Original: [m-trust](https://www.m-trust.co.jp) (the page is now different,
but still, for credit's sake).

# Bloom
Rather than recreating the ThreeJS bloom in R3F, I'm using the [React
Postprocessing Bloom][4]. This is theoretically "better" (i.e., more
realistic). It was based on [this blog post][5] which explains why. However,
it was challenging to replicate the "unreal" effect. The closest I could get
was

```js
<EffectComposer disableNormalPass>
    <Bloom mipmapBlur luminanceThreshold={0} levels={2} intensity={10} />
</EffectComposer>
```

I probably need to play around more with the values, and in particular, get
a better understanding of what `disableNormalPass` and `mipmapBlur` do.

# Images
Since the original website is no longer available, I just grabbed 2 flower
timelapse videos from [Deposit Photos][2], and then extracted the first frame
as an image:

```bash
ffmpeg -i <file-1>.mp4 -ss 1 -vframes 1 <file-1>.jpg
```

This generates an error, but it seems it can be ignored. Other ways to do the
same can be found on [StackOverflow][3].

[1]: https://www.youtube.com/live/3SJIPjlSjtM?si=Ryvuod-529bwn7D_
[2]: https://depositphotos.com
[3]: https://stackoverflow.com/questions/4425413/how-to-extract-the-1st-frame-and-restore-as-an-image-with-ffmpeg
[4]: https://react-postprocessing.docs.pmnd.rs/effects/bloom#example
[5]: https://www.froyok.fr/blog/2021-12-ue4-custom-bloom/