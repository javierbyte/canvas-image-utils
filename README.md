# base64 image utils
Utils for base64 image data.

# Usage
```js
  var base64ImageUtils = require('base64-image-utils')

  var {base64ImageToRGBMatrix} = base64ImageUtils

  base64ImageToRGBMatrix(base64Image, function(err, data) {
    /*
      data is a matrix with rows and columns that corresponds
      to every pixel of the image, where each pixel is represented
      as:
        {
          r: 255,
          g: 255,
          b: 255
        }
    */
  })
```
