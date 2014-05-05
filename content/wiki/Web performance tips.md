---
tags: web performance
---

**Source:** <http://calendar.perfplanet.com/2013/the-runtime-performance-checklist/>

-   Don't invalidate too much of the tree (apply styles/classes as locally as possible)
-   Don't thrash the layout by doing read/write in cycles "forced synchronous layout" (shown by exclamation mark in Chrome timeline)
-   For animations, try the cheaper ones first
    -   opacity, transforms (compositing gets redone)
    -   box-shadow, border-radius, background, outline etc (painting gets redone)
    -   width, height, margin etc (layout gets redone)
-   Avoid excessive repaints caused by large "dirty rectangles" eg. caused by fixed elements
    -   Do this by creating a new compositing layer `-webkit-transform: translateZ(0)` or `backface-visibility: hidden`
    -   But beware of doing this to excess (always profile)

