# base64 image utils
Utils for base64 image data.

# Usage
```js
  var base64ImageUtils = require('base64-image-utils')

  var {base64ImageToRGBMatrix, base64ImageToRGBArray} = base64ImageUtils

  base64ImageToRGBMatrix(base64Image, function(err, data) {
    /*
      data is a matrix with rows and columns that corresponds
      to every pixel of the image, where each pixel is represented
      as:
        {
          r: <Red value of the color>,
          g: <Green value of the color>,
          b: <Blue value of the color>
        }
    */
  })

  base64ImageToRGBArray(base64Image, function(err, data) {
    /*
      data is an array with every pixel described as:
      as:
        {
          x: <X position of the pixel>,
          y: <Y position of the pixel>,
          rgb: {
            r: <Red value of the color>,
            g: <Green value of the color>,
            b: <Blue value of the color>
          }
        }
    */
  })
```
