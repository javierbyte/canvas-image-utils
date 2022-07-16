# canvas-image-utils

## Interfaces

- [Options](interfaces/Options.md)

## Type Aliases

### RGBA

Ƭ **RGBA**: `Object`

Object with `r`,`g`,`b`,`a` values as 0-255 integers.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[index.ts:2](https://github.com/javierbyte/base64-image-utils/blob/dfaf675/index.ts#L2)

___

### RGBAMatrix

Ƭ **RGBAMatrix**: [`RGBA`](modules.md#rgba)[][]

All output pixels in a matrix. RGBAMatrix is an array of size `WIDTH`, and each array contains an array of size `HEIGHT` which constains the `RGBA` elements.

Each element of the array containts `x`,`y`, `rgb`; its position and the RGBA value.

**`Example`**

``js
// rgbMatrix
[
 [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}],
 [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}],
 [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}]
]
rgbMatrix[2,1].r // red value of the pixel on `2`,`1`.
``

#### Defined in

[index.ts:34](https://github.com/javierbyte/base64-image-utils/blob/dfaf675/index.ts#L34)

___

### RGBArray

Ƭ **RGBArray**: { `rgb`: [`RGBA`](modules.md#rgba) ; `x`: `number` ; `y`: `number`  }[]

All output pixels in an array sized `WIDTH` * `HEIGHT`.

Each element of the array containts `x`,`y`, `rgb`; its position and the RGBA value.

**`Example`**

``
// rgbArray
[
  {x: 0, y: 0, rgba: {r: 0, g: 0, b: 0}},
  {x: 0, y: 1, rgba: {r: 255, g: 255, b: 255}},
  {x: 1, y: 0, rgba: {r: 128, g: 128, b: 128}},
  {x: 1, y: 1, rgba: {r: 0, g: 0, b: 0}}
]
``

#### Defined in

[index.ts:18](https://github.com/javierbyte/base64-image-utils/blob/dfaf675/index.ts#L18)

## Functions

### ctxToRGBArray

▸ **ctxToRGBArray**(`ctx`): [`RGBArray`](modules.md#rgbarray)

Generates an array of pixel position and RGBA color from a CanvasRenderingContext2D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | The CanvasRenderingContext2D |

#### Returns

[`RGBArray`](modules.md#rgbarray)

The Array of pixels

___

### ctxToRGBGrayscaleMatrix

▸ **ctxToRGBGrayscaleMatrix**(`ctx`, `opacityBackgroundLightness?`): `Uint8Array`[]

Generates a matrix grayscale values for each pixel. Each pixel is a 0-255 value and each row is an `Uint8Array`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | `undefined` | The CanvasRenderingContext2D |
| `opacityBackgroundLightness` | `number` | `255` | - |

#### Returns

`Uint8Array`[]

___

### ctxToRGBMatrix

▸ **ctxToRGBMatrix**(`ctx`): [`RGBAMatrix`](modules.md#rgbamatrix)

Generates a matrix of RGBA colors from a CanvasRenderingContext2D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | The CanvasRenderingContext2D |

#### Returns

[`RGBAMatrix`](modules.md#rgbamatrix)

The matrix of colors

___

### ctxToRawUint8Array

▸ **ctxToRawUint8Array**(`ctx`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`Uint8Array`

___

### imageToRGBArray

▸ **imageToRGBArray**(`imgSrc`, `options`): `Promise`<[`RGBArray`](modules.md#rgbarray)\>

Get an array of pixels with colors from an image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imgSrc` | `string` | The source of the image |
| `options` | [`Options`](interfaces/Options.md) | Options for the conversion |

#### Returns

`Promise`<[`RGBArray`](modules.md#rgbarray)\>

The array of pixels

___

### imageToRGBMatrix

▸ **imageToRGBMatrix**(`imgSrc`, `options`): `Promise`<[`RGBAMatrix`](modules.md#rgbamatrix)\>

Get an array of pixels with colors from an image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imgSrc` | `string` | The source of the image |
| `options` | [`Options`](interfaces/Options.md) | Options for the conversion |

#### Returns

`Promise`<[`RGBAMatrix`](modules.md#rgbamatrix)\>

The matrix of colors

___

### imageToRawData

▸ **imageToRawData**(`imageSrc`, `options`): `Promise`<`ImageData`\>

Get raw data of an image source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageSrc` | `string` | The source of the image |
| `options` | [`Options`](interfaces/Options.md) | Options for the conversion |

#### Returns

`Promise`<`ImageData`\>

Raw data of the image

___

### imgSrcToCtx

▸ **imgSrcToCtx**(`imgSrc`, `options`): `Promise`<{ `canvas`: `HTMLCanvasElement` ; `ctx`: `CanvasRenderingContext2D` ; `img`: `HTMLImageElement`  }\>

Returns a "CanvasRenderingContext2D" from an image source.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imgSrc` | `string` | The source of the image |
| `options` | [`Options`](interfaces/Options.md) | Options for the conversion |

#### Returns

`Promise`<{ `canvas`: `HTMLCanvasElement` ; `ctx`: `CanvasRenderingContext2D` ; `img`: `HTMLImageElement`  }\>

The CanvasRenderingContext2D
