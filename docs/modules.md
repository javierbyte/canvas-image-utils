[canvas-image-utils](README.md) / Exports

# canvas-image-utils

## Table of contents

### Interfaces

- [Options](interfaces/Options.md)

### Type Aliases

- [RGBAMatrix](modules.md#rgbamatrix)
- [RGBArray](modules.md#rgbarray)

### Functions

- [ctxToRGBArray](modules.md#ctxtorgbarray)
- [ctxToRGBGrayscaleMatrix](modules.md#ctxtorgbgrayscalematrix)
- [ctxToRGBMatrix](modules.md#ctxtorgbmatrix)
- [ctxToRawUint8Array](modules.md#ctxtorawuint8array)
- [imageToRGBArray](modules.md#imagetorgbarray)
- [imageToRGBMatrix](modules.md#imagetorgbmatrix)
- [imageToRawData](modules.md#imagetorawdata)
- [imgSrcToCtx](modules.md#imgsrctoctx)

## Type Aliases

### RGBAMatrix

Ƭ **RGBAMatrix**: `RGBA`[][]

#### Defined in

[index.ts:3](https://github.com/javierbyte/base64-image-utils/blob/75e0854/index.ts#L3)

___

### RGBArray

Ƭ **RGBArray**: { `rgb`: `RGBA` ; `x`: `number` ; `y`: `number`  }[]

#### Defined in

[index.ts:2](https://github.com/javierbyte/base64-image-utils/blob/75e0854/index.ts#L2)

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

▸ **ctxToRGBGrayscaleMatrix**(`ctx`, `transparent?`): `Uint8Array`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | `undefined` |
| `transparent` | `number` | `255` |

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

Get raw data of an image

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

Generates a CanvasRenderingContext2D from a image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imgSrc` | `string` | The source of the image |
| `options` | [`Options`](interfaces/Options.md) | Options for the conversion |

#### Returns

`Promise`<{ `canvas`: `HTMLCanvasElement` ; `ctx`: `CanvasRenderingContext2D` ; `img`: `HTMLImageElement`  }\>

The CanvasRenderingContext2D
