---
tags: html5 video wiki
cache_breaker: 1
---

Relatively up-to-date information is available [here](http://diveintohtml5.com/video.html).

Particularly pertinent:

> For maximum compatibility, here’s what your video workflow will look like:
>
> 1.  Make one version that uses WebM (VP8 + Vorbis).
> 2.  Make another version that uses H.264 baseline video and AAC “low complexity” audio in an MP4 container.
>
> [\#Make](/tags/Make) another version that uses Theora video and Vorbis audio in an Ogg container.
>
> 1.  Link to all three video files from a single &lt;video&gt; element, and fall back to a Flash-based video player.

Sample:

```html
<video width="640" height="480" controls preload>
  <source src="screencast.mp4"  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source src="screencast.webm" type='video/webm; codecs="vp8, vorbis"'>
  <source src="screencast.ogv"  type='video/ogg; codecs="theora, vorbis"'>
</video>
```

Necessary mime types for delivery:

-   `video/ogg`: `.ogv`
-   `video/mp4`: `.mp4`
-   `video/webm`: `.webm`
