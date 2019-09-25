# CHANGELOG

# 1.1.2
- Bugfix

# 1.1.1
- Removes the usage of spread syntax on arrays.

# 1.1.0
- Removes the heavy matrix extraction processing from the main thread, allowing the user to stay interactive with the page meanwhile. Thanks @josejbreijo !

# 1.0.2
- Changed `base64ImageToImageData` to `base64ImageToImageRawData`.

# 1.0.1
- Add `img` return to `base64ImageToImageData` as third parameter

# 1.0.0
- Add `base64ImageToImageData`
- Better semver

## 0.2.0
- Add `options` parameter to functions, as an object in which you can send `width` or `maxWidth`.

## 0.1.1
- Add `a` channel to `base64ImageToRGBArray`.

## 0.1.0
- Add `base64ImageToRGBArray` method.
