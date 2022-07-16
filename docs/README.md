canvas-image-utils / [Exports](modules.md)

# canvas-image-utils

Utils for base64 image data, dependency free. Formerly `base64-image-utils`.

# Installation

```
npm i canvas-image-utils
```

# Usage

```js
import {
  imageToRGBArray,
  imageToRGBMatrix,
  imageToRawData,
  imgSrcToCtx,
  ctxToRGBArray,
  ctxToRGBMatrix,
} from "canvas-image-utils";

const array = await imageToRGBArray(IMAGE_SRC, { size: 128 });
// Array<{
//   x: <X position of the pixel>,
//   y: <Y position of the pixel>,
//   rgb: {
//     r: <Red value of the color>,
//     g: <Green value of the color>,
//     b: <Blue value of the color>,
//     a: <Alpha value of the color>
//   }
// }>

const matrix = await imageToRGBMatrix(IMAGE_SRC, { size: 128 });
// Array<Array<
//   {
//     r: <Red value of the color>,
//     g: <Green value of the color>,
//     b: <Blue value of the color>,
//     a: <Alpha value of the color>
//   }
// >>

const rawData = await imageToRawData(IMAGE_SRC, { size: 128 });
// Raw data from `ctx.getImageData`
```

The first argument of each function is the source of the image, the second is a configuration object that supports `width` and `maxWidth` values, or a `canvas` dom element if wanted to be drawn on screen.
