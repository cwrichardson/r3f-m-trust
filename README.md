# References
Yuri Artiukh's YouTube
["Video exploding to particles, m-trust.co.jp with Three.js and WebGL #44"][1]
Original: [m-trust](https://www.m-trust.co.jp) (the page is now different,
but still, for credit's sake).

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