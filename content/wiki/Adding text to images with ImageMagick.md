---
tags: wiki image.magick
title: Adding text to images with ImageMagick
---

# Example

Taking a Palpatine GIF which already has a caption, "Use my knowledge. I beg you." and:

1. Adding "Review my PR." immediately above.
2. Drawing a line through "Use my  knowledge."

```sh
magick convert \
    -pointsize 18 \
    -fill white \
    -annotate '0x0+150+140' "Review my PR." \
    -draw "line 150,155 320,155" \
    input.gif output.gif
```
