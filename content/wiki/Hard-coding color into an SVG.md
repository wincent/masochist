---
tags: wiki svg
title: Hard-coding color into an SVG
---

Most commonly, you want to change the color of an SVG using CSS (eg. see [this massively upvoted Stack Overflow answer](https://stackoverflow.com/a/53336754/2103996)) so that you can use it in multiple contexts, but sometimes you just want to hard-code a color. This can be done by taking the SVG:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <path d="..."/>
</svg>
```

and inserting a `fill` attribute; eg:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <path fill="#ff0099" d="..."/>
</svg>
```
