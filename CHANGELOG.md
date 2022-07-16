# CHANGELOG

# 2.4.0

- Improve type definitions.
- Remove undocumented `ctxToRawUint8Array`.

# 2.3.2

- Add `cjs` output.

# 2.3.1

- Remove `main`.

# 2.3.0

- Migrated everything to Typescript! Massive thanks to @erickjoestar for
  creating the types 🙌

# 2.2.0

- Add option to select background color on images with transparency for
  `ctxToRGBGrayscaleMatrix`.

# 2.1.1

- Change range of `ctxToRGBGrayscaleMatrix` to 0-255.

# 2.1.0

- Add `ctxToRGBGrayscaleMatrix`.

# 2.0.2

- Minor readme and package updates after the rename.

# 2.0.0

- New name! The package is now named `canvas-image-utils` as it not only support
  `base64` images.
- Methods new return promises.
- Methods were renamed
  - `base64ImageToRGBArray` -> `imageToRGBArray`
  - `base64ImageToRGBMatrix` -> `imageToRGBMatrix`
  - `base64ImageToImageData` -> `imageToRawData`
- The second argument `callback` is not needed anymore since they return a
  promise.

# 1.1.2

- Bugfix

# 1.1.1

- Removes the usage of spread syntax on arrays.

# 1.1.0

- Removes the heavy matrix extraction processing from the main thread, allowing
  the user to stay interactive with the page meanwhile. Thanks @josejbreijo !

# 1.0.2

- Changed `base64ImageToImageData` to `base64ImageToImageRawData`.

# 1.0.1

- Add `img` return to `base64ImageToImageData` as third parameter

# 1.0.0

- Add `base64ImageToImageData`
- Better semver

## 0.2.0

- Add `options` parameter to functions, as an object in which you can send
  `width` or `maxWidth`.

## 0.1.1

- Add `a` channel to `base64ImageToRGBArray`.

## 0.1.0

- Add `base64ImageToRGBArray` method.
