# base64 image utils
Utils for base64 image data.

# Installation
```
npm i base64-image-utils
```

# Usage
```js
const base64ImageUtils = require('base64-image-utils')

const {base64ImageToRGBMatrix, base64ImageToRGBArray, base64ImageToImageData} = base64ImageUtils

base64ImageToImageData(imgSrc, function(err, rawData, img) {

})

base64ImageToRGBMatrix(imgSrc, function(err, data) {
  /*
    data is a matrix with rows and columns that corresponds
    to every pixel of the image, where each pixel is represented
    as:
      {
        r: <Red value of the color>,
        g: <Green value of the color>,
        b: <Blue value of the color>,
        a: <Alpha value of the color>
      }
  */
})

base64ImageToRGBArray(imgSrc, function(err, data) {
  /*
    data is an array with every pixel described as:
    as:
      {
        x: <X position of the pixel>,
        y: <Y position of the pixel>,
        rgb: {
          r: <Red value of the color>,
          g: <Green value of the color>,
          b: <Blue value of the color>,
          a: <Alpha value of the color>
        }
      }
  */
})
```

You can optionally send a third `options` parameter, which is an object that can hold `width` or `maxWidth` values.
