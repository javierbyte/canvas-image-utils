/** Object with `r`,`g`,`b`,`a` values as 0-255 integers. */
export type RGBA = { r: number; g: number; b: number; a: number };
/** All output pixels in an array sized `WIDTH` * `HEIGHT`.
 *
 * Each element of the array containts `x`,`y`, `rgb`; its position and the RGBA value.
 *
 * @example
 * ```
 * // rgbArray
 * [
 *   {x: 0, y: 0, rgba: {r: 0, g: 0, b: 0}},
 *   {x: 0, y: 1, rgba: {r: 255, g: 255, b: 255}},
 *   {x: 1, y: 0, rgba: {r: 128, g: 128, b: 128}},
 *   {x: 1, y: 1, rgba: {r: 0, g: 0, b: 0}}
 * ]
 * ```
 */
export type RGBArray = Array<{ x: number; y: number; rgb: RGBA }>;
/** All output pixels in a matrix. RGBAMatrix is an array of size `WIDTH`, and each array contains an array of size `HEIGHT` which constains the `RGBA` elements.
 *
 * Each element of the array containts `x`,`y`, `rgb`; its position and the RGBA value.
 *
 * @example
 * ```js
 * // rgbMatrix
 * [
 *  [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}],
 *  [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}],
 *  [{r: 0, g: 0, b: 0}, {r: 0, g: 0, b: 0}]
 * ]
 * rgbMatrix[2,1].r // red value of the pixel on `2`,`1`.
 * ```
 */
export type RGBAMatrix = Array<Array<RGBA>>;

export interface Options {
  /** The canvas element with the source image. */
  canvas: HTMLCanvasElement;
  /** Size of the largest side of the outputs. */
  size?: number;
  /** Maximum of the largest side of the outputs. */
  maxSize?: number;
  crop: true | false;
}

export * from './lib/imageToRGBMatrix';
export * from './lib/imageToRGBArray';
export * from './lib/imageToRawData';
export * from './lib/utils';
