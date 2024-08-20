---
tags: wiki svg png
title: Converting SVG to PNG
---

Recently had to do this because, absurdly, the Slack app would let me drag an SVG into its UI to create a new ["slackmoji"](https://slackmojis.com/), rendering it correctly, but as soon as I clicked "Save" it complained "Please make sure your file is a GIF, JPEG, PNG, or WEBP." ಠ_ಠ #electron

# Using [the `sharp` NPM module](https://www.npmjs.com/package/sharp)

```js
const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('/path/to/input.svg');

sharp(svgBuffer)
  .png()
  .toFile('output.png', (error, info) => {
    if (error) {
      throw err;
    }
    console.log(info);
  });
```

Prints something like:

```js
{
  format: 'png',
  width: 512,
  height: 512,
  channels: 4,
  premultiplied: false,
  size: 18946
}
```
